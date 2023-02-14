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
    let response = await this.apiService.CallApi('get', 'modality/'+id);
    return response;
  }

  async getModalities(id): Promise<any> {
    let response = await this.apiService.CallApi('get', 'greenhouse/'+id+'/modalities');
    return response;
  }


  async changeModality(body?: {}): Promise<any>{
    let response = await this.apiService.CallApi('post', 'modality/select', body);
    return response;
  }
}
