import {Component, OnInit} from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Greenhouse} from '../../models/Greenhouse';
import {GreenhouseService} from '../../services/greenhouse.service';
import {StatisticsService} from '../../services/statistics.service';
import {Statistic} from '../../models/Statistic';
import { Chart } from '@syncfusion/ej2-angular-charts';
import {ChartData} from "../../models/chartData";
import {MenuController} from "@ionic/angular";
import {
  ApexAxisChartSeries,
  ApexChart, ApexFill,
  ApexGrid, ApexLegend, ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  title: ApexTitleSubtitle,
  xAxis: ApexXAxis,
  yAxis: ApexYAxis,
  fill: ApexFill,
  stroke: ApexStroke,
  responsive: ApexResponsive[],
};


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  public userId = localStorage.getItem('user_id');
  public greenhouseId = localStorage.getItem('greenhouse_id');
  public user: User[] = [];
  public greenhouse: Greenhouse[] = [];
  public statistic: Statistic[] = [];
  public chartData: Object[];
  public tempData:any = [];
  public airData:any = [];
  public soilData:any = [];
  public dates:any = [];

  public tempChartOptions: ChartOptions;
  public airChartOptions: ChartOptions;
  public soilChartOptions: ChartOptions;

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public account: UserService,
    public gh: GreenhouseService,
    public stats: StatisticsService,
    public menuCtrl: MenuController,
  ) {
    this.tempChartOptions = {
      chart: {
        type: "area",
        width: '100%',
      },
      series : [{
        name: 'Temperature',
        data: [],
      },
      ],
      title : {},
      xAxis : {},
      yAxis : {},
      fill: {
        colors: []
      },
      stroke: {},
      responsive: []
    };
    this.airChartOptions = {
      chart: {
        type: "area",
        width: '100%',
      },
      series : [{
        name: 'Air Humidity',
        data: [],
      },
      ],
      title : {},
      xAxis : {},
      yAxis : {},
      fill: {},
      stroke: {},
      responsive: []
    };
    this.soilChartOptions = {
      chart: {
        type: "area",
        width: '100%',
      },
      series : [{
        name: 'Soil Humidity',
        data: [],
      },
      ],
      title : {},
      xAxis : {},
      yAxis : {},
      fill: {},
      stroke: {},
      responsive: []
    };
  }


  ngOnInit(){
    this.menuCtrl.enable(true);


    this.loadUser();
    this.loadGreenhouse();
    this.loadGreenhouseStatistics();


  }

  async loadUser(){
    this.user = await this.account.find(this.userId);
  }

  async loadGreenhouse(){
    this.greenhouse = await this.gh.find(this.greenhouseId);
  }

  async loadGreenhouseStatistics(){
    this.statistic = await this.stats.find(1);
    this.chartData = this.statistic;
    this.tempData = this.chartData[0];
    this.airData = this.chartData[1];
    this.soilData = this.chartData[2];
    this.dates = this.chartData[3];

    console.log(this.chartData)

    this.tempChartOptions = {
      chart: {
        type: "area",
        width: '100%',
      },
      series : [{
        name: 'Temperature',
        data: this.tempData,
      },
    ],
      title : {
        text: "Temperature",
      },
      xAxis : {
        categories: this.dates,
        type: 'datetime'
      },
      yAxis : {
        labels: {
          show : false
        }
      },
      fill: {
        type: "gradient",
        colors: ['#b01111'],
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: ['#b01111']
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    },
    this.airChartOptions = {
      chart: {
        type: "area",
        width: '100%',
      },
      series : [{
        name: 'Air Humidity',
        data: this.airData,
      },
    ],
      title : {
        text: "Air Humidity",
      },
      xAxis : {
        categories: this.dates,
        type: 'datetime'
      },
      yAxis : {
        labels: {
          show : false
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]

    },


    this.soilChartOptions = {
      chart: {
        type: "area",
        width: '100%',
      },
      series : [{
        name: 'Air Humidity',
        data: this.soilData,
        },
      ],
      title : {
        text: "Soil Humidity",
      },
      xAxis : {
        categories: this.dates,
        type: 'datetime'
      },
      yAxis : {
        labels: {
          show : false
        }
      },
      fill: {
        type: "gradient",
        colors: ['#B99B6B'],
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: ['#B99B6B']
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]

    };

  }

}






 // this.xAxis = {
 //   title: 'Date',
 //   valueType: 'Category'
 // };
 //
 // this.yAxis = {
 //   title: 'Temperatures',
 // };







