let express = require('express')
let app = express();
const Task = require('./server/models/task')
const User = require('./server/models/user')
let http = require('http');
let server = http.Server(app);
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
var cors = require('cors')
var path = require('path')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/newtodo')));
const port = process.env.PORT || 3000;

app.use('/api', api)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/newtodo/index.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/newtodo/index.html'));
})

const mongoose = require('mongoose')
const db = "mongodb+srv://todo:todo123@cluster0-psgxa.mongodb.net/todo?retryWrites=true&w=majority"
mongoose.connect(db, err => {
    if (err) {} else {}
})



let socketIO = require('socket.io');
let io = socketIO(server);



io.on('connection', (socket) => {
    console.log('user connected');

    Task.find().populate({ path: 'owner', select: '-password' }).populate({ path: 'co_owner', select: '-password' }).then(task => {
        io.emit('initialTask', task)
    })

    socket.on('addTask', (task) => {
        console.log(task);
        Task.create(task).then(data =>
            Task.find().populate({ path: 'owner', select: '-password' }).populate({ path: 'co_owner', select: '-password' })
            .then(task => {
                io.emit('initialTask', task)
            })
            .catch(err => {
                console.log(err)
            })
        )
    });

    socket.on('delTask', (task) => {
        Task.findByIdAndDelete(task._id).then(data =>
            Task.find().populate({ path: 'owner', select: '-password' }).populate({ path: 'co_owner', select: '-password' })
            .then(task => {
                io.emit('initialTask', task)
            })
            .catch(err => {
                console.log(err)
            })
        )
    })

    socket.on('addCoOwner', (data) => {
        const email = data.email
        const taskId = data.id
        console.log(taskId)
        User.findOne({ email: email })
            .then(user => {
                Task.findOne({ _id: taskId, co_owner: user._id })
                    .then(task => {
                        console.log(task)
                        if (task === null) {
                            Task.update({ _id: taskId }, { $push: { co_owner: user._id } }).then(task => {
                                Task.find().populate({ path: 'owner', select: '-password' }).populate({ path: 'co_owner', select: '-password' }).then(task => {
                                    io.emit('initialTask', task)
                                })
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })

    socket.on('editTask', (data) => {
        const title = data.title
        const taskId = data.id
        Task.update({ _id: taskId }, { $set: { title: title } })
            .then(task => {
                Task.find().populate({ path: 'owner', select: '-password' }).populate({ path: 'co_owner', select: '-password' })
                    .then(task => {
                        io.emit('initialTask', task)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    })
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});