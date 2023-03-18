import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-password-reset',
  templateUrl: './verify-password-reset.page.html',
  styleUrls: ['./verify-password-reset.page.scss'],
})
export class VerifyPasswordResetPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }

  async resetPassword(code){
    console.log(code)
    let body = {
      verificationCode: code.value
    }
    let response = await this.auth.verifyRecoveryCode(body)
    this.router.navigate(["password-reset"])
  }

}
