import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Modality} from "../models/Modality";

@Injectable({
  providedIn: 'root'
})
export class ModalityService {

  constructor(
      private apiService: ApiService,
  ) { }

  async findModality(id){
    let response = await this.apiService.CallApi('get', 'v1/modality/'+id);
    return response;
  }

  async getModalities(id): Promise<any> {
    let response = await this.apiService.CallApi('get', 'v1/greenhouse/'+id+'/modalities');
    return response;
  }


  async changeModality(body?: {}): Promise<any>{
    let response = await this.apiService.CallApi('post', 'v1/modality/select', body);
    return response;
  }

  async addModality(body?: {}):Promise<any>{
    let response = await this.apiService.CallApi('post', 'v1/modality/store', body);
    return response;
  }
}
