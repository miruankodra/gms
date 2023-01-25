import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {User} from '../models/User';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiService: ApiService) { }

  async register(body: User[]) {
    const response = await this.apiService.CallApi('post', 'user/register', body);
    return response;
  }

}
