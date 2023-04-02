import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {EnrollFormPage} from "./enroll.form.page";
import {AuthService} from "../../services/auth.service";
import {MenuController} from "@ionic/angular";
import Swal from "sweetalert2";


@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {

  public enrollForm: FormGroup;
  public Toast = Swal.mixin({
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

  constructor(
      public formBuilder: FormBuilder,
      public router: Router,
      public authService: AuthService,
      public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.enrollForm = new EnrollFormPage(this.formBuilder).createForm();
  }

  async verifyEmail(registerForm?: any){
    let response = await this.authService.verfiyEmail(registerForm);
    if (response.success == true) {
      this.Toast.fire({
        icon: 'success',
        title: response.message,
      });
      this.router.navigate(['verify']);
      // console.log(response.data);
      localStorage.setItem('enroll_id', response.data);
    } else {
      this.Toast.fire({
        icon: 'error',
        title: response.message,
      });
    }

  }

}
