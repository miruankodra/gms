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



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public userId: any;
  public user: User[] = [];
  public greenhouse: Greenhouse[] = [];
  public statistic: Statistic[] = [];
  public primaryXAxis: Object;
  public chartData: Object[];
  public tempData:any = [];
  public airData:any = [];
  public soilData:any = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public account: UserService,
    public gh: GreenhouseService,
    public stats: StatisticsService,
    public menuCtrl: MenuController,
  ) {}


  ngOnInit(){
    this.menuCtrl.enable(true);
    this.userId = localStorage.getItem('user_id');

    this.loadUser();
    this.loadGreenhouse();
    this.loadGreenhouseStatistics();


  }

  async loadUser(){
    this.user = await this.account.find(this.userId, 'user');
    console.log(this.user);
  }

  async loadGreenhouse(){
    this.greenhouse = await this.gh.find(this.userId, 'greenhouse');
    console.log(this.greenhouse);
  }

  async loadGreenhouseStatistics(){
    this.statistic = await this.stats.find(1, 'statistics');
    this.chartData = this.statistic;
    this.tempData = this.chartData[0];
    this.airData = this.chartData[1];
    this.soilData = this.chartData[2];

    // console.log(this.chartData);
    this.primaryXAxis = {
      valueType: 'Category'
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







