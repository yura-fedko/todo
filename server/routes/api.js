const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => {
            console.log(user._id);
            res.send(true)
        })
        .catch(err => {
            console.log(err);
            res.json(
                "A user with this email already exists"
            )
        })
})

router.post('/login', (req, res) => {
    let user = req.body
    User.find({ email: user.email, password: user.password })
        .then(user => {
            res.send({
                ok: true,
                id: user[0]._id
            })
        })
        .catch(err => {
            res.json({
                ok: false,
                id: null,
                error: 'Login or password is incorrect!'
            })
        })
})


module.exports = router