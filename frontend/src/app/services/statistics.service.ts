import { Injectable } from '@angular/core';
import {Statistic} from '../models/Statistic';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private ApiService: ApiService) { }

  async find(id): Promise<Statistic[]> {
    let response = await this.ApiService.CallApi('get', 'v1/statistics/'+id);
    if (response !== false){
      return response.data;
    } else {
      return [];
    }
  }
}
