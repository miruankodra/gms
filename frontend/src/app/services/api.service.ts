import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiResponse} from "../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public async CallApi(type: string, endpoint: string, body?: {}){
    let response;
    let headers = new HttpHeaders({'Accept': 'application/json'});

    try {
      switch (type){
        case 'delete':
          response = await this.http.delete<ApiResponse>(`${environment.backendURI}`+ endpoint, {headers: headers}).toPromise();
          break;
        case 'put':
          response = await this.http.put<ApiResponse>(`${environment.backendURI}`+ endpoint, body, {headers: headers}).toPromise();
          break;
        case 'post':
          response = await this.http.post<ApiResponse>(`${environment.backendURI}`+ endpoint, body,{headers: headers}).toPromise();
          break;
        case 'get':
        default:
          response = await this.http.get<ApiResponse>(`${environment.backendURI}`+ endpoint, {headers: headers}).toPromise();
          break;
      }
    } catch (e) {
      if (e.status === 401){

      }else if (e.status === 500 || e.status === 501 || e.status === 400 || e.status === 522){
        console.log(e.error().message);
      }
      return false;
    }
    return response;
  }
}
