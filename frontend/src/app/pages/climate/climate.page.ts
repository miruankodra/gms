import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.page.html',
  styleUrls: ['./climate.page.scss'],
})
export class ClimatePage implements OnInit {

  temperature?: number = 25;
  airHumidity?: number = 50;
  soilHumidity?: number = 75;

  constructor() { }

  ngOnInit() {
  }

}
