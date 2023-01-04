import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  constructor(public http: HttpClient) { }

  public find(userId, endpoint){
    let url = '';
    if (endpoint){
      url = environment.backendURI + endpoint + '/' + userId;
    }else {
      url = environment.backendURI + '/greenhouse';
    }
    return this.http.get(url);
  }




}
