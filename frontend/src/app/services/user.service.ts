import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api.service';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {




  constructor(private ApiService: ApiService) {}





  async find(id, endpoint): Promise<User[]> {
    let response = await this.ApiService.CallApi('get', `${endpoint}/${id}`);
    if (response !== false){
      return response.data;
    } else {
      return [];
    }
  }


}

