import { Component, OnInit } from '@angular/core';
import {ModalityService} from "../../services/modality.service";
import {Modality} from "../../models/Modality";
import Swal from "sweetalert2";

@Component({
  selector: 'app-modalities',
  templateUrl: './modalities.page.html',
  styleUrls: ['./modalities.page.scss'],
})
export class ModalitiesPage implements OnInit {

  private gid: string = localStorage.getItem('greenhouse_id');
  private modalities: Modality[] = [];
  private modality: Modality[] = [];

  private Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  constructor(
      public modalityService: ModalityService,
  ) { }

  ngOnInit() {
    this.getModalities();
    this.loadModality();
  }

  async loadModality() {
    let response = await this.modalityService.findModality(this.gid);
    if (response.sucess = true) {
      this.modality = response.data;
    } else {
      this.Toast.fire({
        icon: "error",
        title: "Could not load data!"
      });
    }
  }

  async getModalities() {
    let response = await this.modalityService.getModalities(this.gid);
    console.log(response)
    if (response.success == true) {
      this.modalities = response.data;
    }
  }

  async changeModality(event) {
    let body = {
      modality_id : event.detail.value,
      greenhouse_id : this.gid,
    };
    let response = await this.modalityService.changeModality(body);
    if (response.success == true) {
      this.modality = response.data;
      this.Toast.fire({
        icon : "success",
        title: response.message,
      });
    } else {
      this.Toast.fire({
        icon : "error",
        title: response.message,
      });
    }
  }


}
