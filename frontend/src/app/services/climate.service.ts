import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ApiResponse} from "../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(
      private apiService: ApiService,
  ) { }

  async getClimateStats(greenhouseId):Promise<any> {
    const response = this.apiService.CallApi('get', 'v1/climate/'+greenhouseId);
    return response;
  }
}
