import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Bots} from "../models/bots";

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(
      public apiService: ApiService,
  ) { }

  async findBot(id?: number):Promise<any>{
    let response = await this.apiService.CallApi('get', 'v1/bot/'+id);
    return response;
  }
}
