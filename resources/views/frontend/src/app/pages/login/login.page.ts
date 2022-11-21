import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;



  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.loginForm = new LoginPageForm(this.formBuilder).createForm();
  }

  login(loginForm) {
    this.http
      .post('http://127.0.0.1:8000/api/user/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .subscribe((response:any) => {
        // console.log(response[0]);
        const id = response[0];

        if(id != null){
          this.router.navigateByUrl('/home');
        }else{
          alert('Wrong credentials!')
        }
      });
  }



  toRegister(){
    this.router.navigateByUrl('/register');
  }

}
