import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-email',
  templateUrl: './password-email.page.html',
  styleUrls: ['./password-email.page.scss'],
})
export class PasswordEmailPage implements OnInit {

  constructor(
    public menuCtrl: MenuController, 
    private router: Router,
    private auth: AuthService,

  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async verifyPasswordReset(email){ 
    // console.log(email.value);
    let body = {
      email: email.value
    }
    console.log(body)
    const response = await this.auth.requestRecoveryCode(body);
    this.router.navigate(["verify-password-reset"])
  }

}
