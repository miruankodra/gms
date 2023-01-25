import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(public http: HttpClient) { }

  async getCountries(): Promise<any>{
    let response = await this.http.get('https://restcountries.com/v3.1/all');
    return response;
  }
}
