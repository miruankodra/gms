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
import { RegisterPageForm } from './register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = new RegisterPageForm(this.formBuilder).createForm();
  }

  register(registerForm){
    if(registerForm.password == registerForm.confirm){
    this.http
      .post('http://127.0.0.1:8000/api/user/register', {
        firstname: registerForm.firstname,
        lastname: registerForm.lastname,
        username: registerForm.username,
        email: registerForm.email,
        phone: registerForm.phone,
        password: registerForm.password,
        address: registerForm.address,
        country: registerForm.country,
        city: registerForm.city,
        zip: registerForm.zip,
      })
      .subscribe((response:any) => {
        console.log(response);
        if(response != null){
          this.router.navigateByUrl('/login');
        }
      });
    }else{
      alert('Passowrds do not match!')
    }
  }

}
