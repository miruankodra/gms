import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false)
  }

  goToLogin(){
    this.router.navigate(["login"])
  }
}
