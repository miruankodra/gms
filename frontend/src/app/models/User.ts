import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment}  from '../../environments/environment';


export class User {
  users = new Array<any>();
  user = new Object();


  constructor(public http: HttpClient,) {}

  public getUsers(){
    const url = environment.backendURI + 'users';
    return this.http.get<any>(url).subscribe(response => {
      this.users = response;
    });
  }

  public getUserInfo(id, apiToken, endpoint){
    const url = environment.backendURI + endpoint;
    this.http.post(url, {
      token: apiToken,
      userId: id,
    }).subscribe(data => {
      this.user = data;
    });
  }

}

