 import { Component } from '@angular/core';
 import { Route, ActivatedRoute } from '@angular/router';
 import { map } from 'rxjs/operators';
 import { Observable, observable } from 'rxjs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { HttpClient, HttpParams } from '@angular/common/http';
 import {UserService} from "../../services/user.service";
 import {GreenhouseService} from "../../services/greenhouse.service";



export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any[];
  labels: any[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // public options: Partial<ChartOptions>;
  // public airHumidity: Partial<ChartOptions>;
  // public areaOptions: Partial<ChartOptions>;
  // public soilHumidity: Partial<ChartOptions>;
  public greenhouse: Array<any>;
  public token: string;
  public userId: any;
  public user: Array<any>;
  public username: any;
  public name: any;
  public location: any;
  public area: any;




  // type = 'bar';
  // options = {
  //   responsive: true,
  //   maintainAspectRatio: true,
  //   scales: {
  //     yAxes : [{
  //       ticks : {
  //         max : 100,
  //         min : 0
  //       }
  //     }]
  //   }
  // };



  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public account: UserService,
    public gh: GreenhouseService,
  ) {}


  ngOnInit(){
  }

  ngAfterViewInit(){
    this.activatedRoute.queryParams
      .subscribe(params => {
        // console.log(params);
        this.userId = params.userId;
      });
    this.account.find(this.userId, '/user').subscribe(response => {
      this.user = response;
      this.username = this.user['username'];
    });


    this.gh.find(this.userId, '/greenhouse').subscribe(response => {
      console.log(response);
    });

    console.log(this.user);
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







