import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiLogin = '/api/login';
  apiReg = '/api/register';
  constructor(private http: HttpClient) { }

  logIn(body) {
    return this.http.post<any>(this.apiLogin, body);
  }

  regUser(body) {
    return this.http.post<any>(this.apiReg, body);
  }
}
