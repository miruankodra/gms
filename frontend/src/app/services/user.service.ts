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




  async find(id): Promise<User[]> {
    const response = await this.ApiService.CallApi('get', `v1/user/${id}`);
    if (response !== false){
      return response.data;
    } else {
      return [];
    }
  }

  async saveProfile(body?: User[]): Promise<User[]> {
    let response = await this.ApiService.CallApi('post', 'v1/user/profile/store', body);
    return response;
  }


}

