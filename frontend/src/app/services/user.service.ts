import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api.service';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public currentUserId?: number;

  constructor(private ApiService: ApiService) {}

  public setCurrerntUserId(id){
    localStorage.setItem('user_id', id);
  }




  async find(id, endpoint): Promise<User[]> {
    const response = await this.ApiService.CallApi('get', `${endpoint}/${id}`);
    if (response !== false){
      return response.data;
    } else {
      return [];
    }
  }


}

