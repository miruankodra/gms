import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {HttpClient} from "@angular/common/http";
import { Country, State, City } from 'country-state-city';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {UserProfilePageForm} from "./user-profile.page.form";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public profileForm: FormGroup;
  public countryData = Country.getAllCountries();
  public cityData = City.getAllCities();
  public userId = localStorage.getItem('user_id');
  public user?: User[] = [];

  constructor(public ui: UiService,
              public  http: HttpClient,
              public acc: UserService,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.profileForm = new UserProfilePageForm(this.formBuilder).createForm();
    this.loadUser();
  }

  async loadUser() {
    let response = await this.acc.find(this.userId);
    this.user = response;
    // console.log(response);
  }

  async saveProfile(profileForm){
    let response = await this.acc.saveProfile(profileForm);
    this.loadUser();
  }

  // async loadCountries(){
  //   let response = this.ui.getCountries();
  // }

}
