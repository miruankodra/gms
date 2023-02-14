import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MenuController} from "@ionic/angular";
import {EnrollFormPage} from "../enroll/enroll.form.page";
import {VerifyFormPage} from "./verify.form.page";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  public verifyForm: FormGroup;
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
    this.verifyForm = new VerifyFormPage(this.formBuilder).createForm();
  }

  // nextDigit(nextInput, verifyForm) {
  //   if (nextInput != null) {
  //     setTimeout(() => {
  //       nextInput.setFocus();
  //     }, 10);
  //   } else {
  //     this.sendVerificationCode(verifyForm);
  //
  //   }
  //
  //   // nextInput.select();
  // }

  nextDigit(nextInput) {
    if (nextInput != null) {
      setTimeout(() => {
        nextInput.setFocus();
      }, 10);
    } else {
      nextInput.blur();
    }
  }

  // TODO: Change event listener in html page from normal (change) to (ionChange)

  async sendVerificationCode (verifyForm) {

    let code = `${verifyForm.ftDigit}${verifyForm.sDigit}${verifyForm.tDigit}${verifyForm.frDigit}${verifyForm.fDigit}`;
    let body = {
      id : localStorage.getItem('enroll_id'),
      verify : code
    };
    let response = await this.authService.verifyCode(body);
    if (response.success == true){
      this.Toast.fire({
        icon : 'success',
        title : response.message
      });
      this.router.navigate(['register']);
    }else{
      this.Toast.fire({
        icon : 'error',
        title : response.message
      });
      this.verifyForm.reset();
    }
  }

}
