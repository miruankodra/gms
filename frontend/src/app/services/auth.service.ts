import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {User} from '../models/User';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiService: ApiService) { }

  async login(body: {}) {
    const response = await this.apiService.CallApi('post', 'user/login', body);
    return response;
  }

  async verfiyEmail(body?: {}): Promise<any>{
    let response = await this.apiService.CallApi('post', 'enroll', body);
    return response;
  }

  async verifyCode(body?: {}): Promise<any> {
    let response = await this.apiService.CallApi('post', 'verify/code', body);
    return response;
  }

  async register(body: User[]) {
    const response = await this.apiService.CallApi('post', 'user/register', body);
    return response;
  }

}
