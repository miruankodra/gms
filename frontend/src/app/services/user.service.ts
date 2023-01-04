import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public users = Array<any>();
  // public user = Array<any>();


  constructor(public http: HttpClient,) {}

  public getUsers(){
    const url = environment.backendURI + '/users';
    return this.http.get<any>(url);
    //   .subscribe(response => {
    //   this.users = response;
    // });
  }


  public find(id, endpoint): Observable<any> {
    const url = environment.backendURI + endpoint + '/' + id;
    return this.http.get<any>(url);
    // .subscribe(response => {
    //   this.user = response;
    // });
  }


}

