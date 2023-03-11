import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-password-email',
  templateUrl: './password-email.page.html',
  styleUrls: ['./password-email.page.scss'],
})
export class PasswordEmailPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
