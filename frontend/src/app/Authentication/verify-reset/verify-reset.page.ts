import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-verify-password-reset',
  templateUrl: './verify-reset.page.html',
  styleUrls: ['./verify-reset.page.scss'],
})
export class VerifyResetPage implements OnInit {

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
      public auth: AuthService,
      public menuCtrl: MenuController,
      public router: Router,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }


  async verify(code?: string) {
    const body = {
      code,
    }
    const response = await this.auth.resetCodeVerify(body);
    if (response.success == true) {
      this.Toast.fire({
        icon: "success",
        title: response.message,
      });
      this.router.navigate(['password-reset']);
    } else {
      this.Toast.fire({
        icon: "error",
        title: response.message,
      });
    }
  }

}
