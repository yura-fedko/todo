import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { State, IsLoggetIn} from '../data';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formState = State.formState;
  users: any;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  form: FormGroup;
  isLoggetIn = IsLoggetIn;
  error: string;
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup ({
      email: new FormControl ('', [Validators.email]),
      password: new FormControl ('', [Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword: new FormControl ('', [Validators.minLength(8), Validators.maxLength(16)])
    });
  }

  regUser() {
    this.error = '';
    if (this.form.get('email').value !== '' || this.form.get('password').value !== '' || this.form.get('confirmPassword').value !== '') {
      if (this.form.get('password').value === this.form.get('confirmPassword').value) {
      const body = {
        email: this.form.get('email').value,
        password: this.form.get('password').value
      };
      this.service.regUser(body)
      .subscribe (
        res => {
          if (res === true) {
            this.formState = 1;
          } else {
            this.error = res;
          }
        });
      } else {
        this.error = 'Passwords do not match!';
      }
    }
  }

  logIn() {
    this.error = '';
    const body = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.service.logIn(body)
      .subscribe
        ((res) => {
          Cookie.set('id', res.id);
          if (res.ok) {
            this.router.navigate(['task']);
            this.isLoggetIn.status = true;
          } else {
            this.error = res.error;
          }
            });
          }
}
