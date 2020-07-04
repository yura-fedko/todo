import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { IsLoggetIn, State } from '../data';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { JsonLdService } from 'ngx-seo';
import { SeoService } from '@trilon/ng-universal';

import * as io from 'socket.io-client';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  schema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'angular.io',
    url: 'https://angular.io'
  };
  message: string;
  socket: any;
  tasks: any;
  isLoggetIn = IsLoggetIn;
  addTaskTitle: string;
  state = State;
  editTask;
  shareInput: string;

  constructor(private router: Router, private seo: SeoService) {

    this.state.logOut = true;
    this.socket = io.connect('');

    this.socket.on('initialTask', (res) => {
    console.log(res)
    this.tasks = res.filter(filterByOwner);

    function filterByOwner(task) {
      if (task.owner._id === Cookie.get('id') || filterByCoOwner(task.co_owner)) {
         return true;
      } else {
        return false;
      }
    }

    function filterByCoOwner(owners) {
      if (owners.length !== 0) {
        for (let i = 0; i <= owners.length; i++) {
          if (owners[i]._id === Cookie.get('id')) {
            return true;
          } else {
            return false;
          }
        }
      }
    }

    });


  }

  addTask() {
    if (this.addTaskTitle !== undefined) {
      this.socket.emit('addTask', {
        title: this.addTaskTitle,
        owner: Cookie.get('id')
      });
    }
  }

  delTask(task) {
    this.socket.emit('delTask', task);
  }

  editTaskFn(task, title) {
    if (title !== '') {
      this.socket.emit('editTask', { id: task._id, title: title });
    }
  }

  addCoOwner(task, email) {
    if (email !== '') {
      this.socket.emit('addCoOwner', { id: task._id, email: email });
    }
  }

  editBtn(task) {
    if (this.editTask === task) {
      this.editTask = '';
    } else {
      this.editTask = task;
    }
  }

  ngOnInit() {
    this.seo.updateStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "http://www.trilon.io",
        "name": "Fullstack Consulting",
      }
    );
  }

}
