import { Component } from '@angular/core';
import {Router} from "@angular/router";
import Swal from "sweetalert2";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private Toast = Swal.mixin({
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

  public appPages = [
    {title: 'Dashboard', url:'/home', icon: 'home'},
    {title: 'Climate', url:'/climate', icon: 'thermometer'},
    {title: 'Control Panel', url:'/control-panel', icon: 'build'},
    {title: 'Modalities', url:'/modalities', icon: 'albums'}
  ];
  public currentYear: number = new Date().getFullYear();
  constructor(
      public router: Router,
  ) {}

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
    this.Toast.fire({
      icon: "success",
      title: "Loged Out!"
    });
  }
}
