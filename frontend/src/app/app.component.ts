import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Dashboard', url:'/home', icon: 'home'},
    {title: 'Climate', url:'/climate', icon: 'thermometer'},
    {title: 'Control Panel', url:'/control-panel', icon: 'build'},
    {title: 'Modalities', url:'/modalities', icon: 'albums'}
  ];
  public currentYear: number = new Date().getFullYear();
  constructor() {}
}
