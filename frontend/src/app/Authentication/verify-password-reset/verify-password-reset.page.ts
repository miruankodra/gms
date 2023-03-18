import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-verify-password-reset',
  templateUrl: './verify-password-reset.page.html',
  styleUrls: ['./verify-password-reset.page.scss'],
})
export class VerifyPasswordResetPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }

  resetPassword(){
    this.router.navigate(["password-reset"])
  }

}
