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
import {User} from "../../models/User";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  public body: User[] = [];


  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    public  menuCtrl: MenuController,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    this.registerForm = new RegisterPageForm(this.formBuilder).createForm();
    this.menuCtrl.enable(false);
  }





  async register(registerForm){

    registerForm.e_id = localStorage.getItem('enroll_id');
    let response;
    this.body = registerForm;
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
    });



    if(registerForm.password === registerForm.confirm){
      response = await this.auth.register(this.body);

      if (response.success === true){
        this.router.navigateByUrl('/login');
        Toast.fire({
          icon: 'success',
          title: response.message,
        });
      } else {
        //..........
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Passwords do not match!',
        text: 'Check your password confiramtion',
        heightAuto: false,
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  }

}
