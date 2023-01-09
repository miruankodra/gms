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
    {title: 'Control Panel', url:'/controlpanel', icon: 'build'},
    {title: 'Modalities', url:'/modalities', icon: 'albums'}
  ];
  constructor() {}
}
