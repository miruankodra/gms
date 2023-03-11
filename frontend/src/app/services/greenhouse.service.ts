import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Greenhouse} from '../models/Greenhouse';

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  constructor(public http: HttpClient, public ApiService: ApiService) { }

  async find(id): Promise<Greenhouse[]> {
    let response = await this.ApiService.CallApi('get', 'v1/greenhouse/'+id);
    if (response !== false){
      return response.data;
    } else {
      return [];
    }
  }




}
