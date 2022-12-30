import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RegisterPageForm } from './register.page.form';
import {MenuController} from '@ionic/angular';

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
    private formBuilder: FormBuilder,
    public  menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.registerForm = new RegisterPageForm(this.formBuilder).createForm();
    this.menuCtrl.enable(false);
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
        if(response['status'] == 'success'){
          this.router.navigateByUrl('/login');
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
            title: 'User Stored!'
          })
        }
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match!',
        text: 'Check your password confiramtion',
        heightAuto: false,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

}
