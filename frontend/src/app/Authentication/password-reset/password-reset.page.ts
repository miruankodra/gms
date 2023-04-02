import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from "../../services/auth.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
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
    public menuCtrl: MenuController,
    public auth: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async passwordReset(password: string) {
    const body = {
      password,
    };
    const response = await this.auth.resetPassword(body);
    if (response.success == true) {
      this.Toast.fire({
        icon: "success",
        title: response.message,
      });
      this.router.navigate(['']);
    } else {
      this.Toast.fire({
        icon: "error",
        title: response.message,
      });
    }
  }

}
