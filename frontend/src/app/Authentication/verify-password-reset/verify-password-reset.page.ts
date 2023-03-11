import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-verify-password-reset',
  templateUrl: './verify-password-reset.page.html',
  styleUrls: ['./verify-password-reset.page.scss'],
})
export class VerifyPasswordResetPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }

}
