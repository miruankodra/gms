import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  myData: any;

  constructor(public ui: UiService, public  http: HttpClient) { }

  ngOnInit() {
    // this.loadCountries();
  }

  // async loadCountries(){
  //   let response = this.ui.getCountries();
  // }

}
