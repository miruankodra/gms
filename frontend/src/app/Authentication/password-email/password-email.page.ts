import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-password-email',
  templateUrl: './password-email.page.html',
  styleUrls: ['./password-email.page.scss'],
})
export class PasswordEmailPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  verifyPasswordReset(){
    this.router.navigate(["verify-password-reset"])
  }

}
