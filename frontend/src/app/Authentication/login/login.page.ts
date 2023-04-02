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
import {MenuController} from '@ionic/angular';
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  user: string;



  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    public menuCtrl: MenuController,
    public account: UserService,
    public auth: AuthService,
    ) {}

  ngOnInit() {
    this.loginForm = new LoginPageForm(this.formBuilder).createForm();
    this.menuCtrl.enable(false);
  }

  async login(loginForm) {
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

    let response = await this.auth.login(loginForm);
    if(response.success === true){
      this.account.setCurrerntUserId(response.data.id);
      localStorage.setItem('greenhouse_id', response.data.greenhouse_id);
      this.router.navigate(['home']);
      Toast.fire({
        icon: 'success',
        title: response.message
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: response.message,
        text: 'Credentials do not match!',
        heightAuto: false,
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  }



  toRegister(){
    this.router.navigateByUrl('/enroll');
  }

  async goToVerification(email?: string) {
    const body = {
      email,
    };
    const response = await this.auth.requestRecoveryCode(body);
    this.router.navigateByUrl('/verify-reset');
  }

}
