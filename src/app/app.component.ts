import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import {webSocket} from 'rxjs/webSocket';
import { from } from 'rxjs';
import { IsLoggetIn, State} from './data';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { SeoService } from '@trilon/ng-universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggetIn = IsLoggetIn;
  state = State;
  socket: any;
  constructor(private seo: SeoService) {
    this.seo.updateStructuredData(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "http://www.trilon.io",
        "name": "Fullstack Consulting",
      }
    );
  }
  logOut() {
    this.isLoggetIn.status = false;
    Cookie.delete('id');
  }
}
