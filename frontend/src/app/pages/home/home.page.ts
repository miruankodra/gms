import {Component, OnInit} from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Greenhouse} from '../../models/Greenhouse';
import {GreenhouseService} from '../../services/greenhouse.service';
import {StatisticsService} from '../../services/statistics.service';
import {Statistic} from '../../models/Statistic';



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

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public account: UserService,
    public gh: GreenhouseService,
    public stats: StatisticsService,
  ) {}


  ngOnInit(){

  this.activatedRoute.queryParams
    .subscribe(params => {
      // console.log(params);
      this.userId = params.userId;
    });

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
    console.log(this.statistic);
  }



    // this.account.find(this.userId, '/user').subscribe(response => {
    //   this.user = response;
    //   this.username = this.user['username'];
    // });
    //
    //
    // this.gh.find(this.userId, '/greenhouse').subscribe(response => {
    //   console.log(response);
    // });
    //
    // console.log(this.user);








}






 // this.xAxis = {
 //   title: 'Date',
 //   valueType: 'Category'
 // };
 //
 // this.yAxis = {
 //   title: 'Temperatures',
 // };







