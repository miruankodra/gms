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
    const response = await this.apiService.CallApi('post', 'v1/user/login', body);
    return response;
  }

  async verfiyEmail(body?: {}): Promise<any>{
    let response = await this.apiService.CallApi('post', 'v1/enroll', body);
    return response;
  }

  async verifyCode(body?: {}): Promise<any> {
    let response = await this.apiService.CallApi('post', 'v1/verify/code', body);
    return response;
  }

  async register(body: User[]) {
    const response = await this.apiService.CallApi('post', 'v1/user/register', body);
    return response;
  }

  async requestRecoveryCode(body?: {}): Promise<any> {
    let response = await this.apiService.CallApi('post', 'v1/password/reset/request', body);
    return response;
  }

  async resetCodeVerify(body?: {}): Promise<any> {
    let response = await this.apiService.CallApi('post', 'v1/password/reset/verification', body);
    return response;
  }

  async resetPassword(body: {}) {
    const response = await this.apiService.CallApi('post', 'v1/password/reset', body);
    return response;
  }

}
