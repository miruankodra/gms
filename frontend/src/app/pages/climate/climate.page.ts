import { Component, OnInit } from '@angular/core';
import {ClimateService} from "../../services/climate.service";
import {Climate} from "../../models/Climate";
import { interval } from 'rxjs';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.page.html',
  styleUrls: ['./climate.page.scss'],
})
export class ClimatePage implements OnInit {

  temperature?: number = 25;
  airHumidity?: number = 50;
  soilHumidity?: number = 75;
  greenhouseId = localStorage.getItem('greenhouse_id');
  climate?: Climate[] = [];

  constructor(
      private climateService: ClimateService,
  ) {
    interval(60000).subscribe(x => {
      this.load();
    });
  }

  ngOnInit() {
    this.load();
  }

  async load(){
    const response = await this.climateService.getClimateStats(this.greenhouseId);
    this.climate = response.data;
  }

}
