import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  user: string



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
       
        if(response['status'] == 'success'){
          
          this.user = JSON.stringify(response['user'])
          console.log(this.user);
          
          this.router.navigate(['/home'] , {queryParams:{user:this.user}});
          // , {queryParams:{user:response['data']}}
          
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully!'
          })
        }else{

          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: 'Credentials do not match!',
            heightAuto: false,
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      });
  }



  toRegister(){
    this.router.navigateByUrl('/register');
  }

}
