import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalityService} from "../../services/modality.service";
import {Modality} from "../../models/Modality";
import Swal from "sweetalert2";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalityPageForm} from "./modality.page.form";
import {IonModal} from "@ionic/angular";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modalities',
  templateUrl: './modalities.page.html',
  styleUrls: ['./modalities.page.scss'],
})
export class ModalitiesPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  modalityForm: FormGroup;
  public modalities: Modality[] = [];
  public modality: Modality[] = [];
  public gid: string = localStorage.getItem('greenhouse_id');
  public bid: number;


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
      public formBuilder: FormBuilder,
      // public modal: IonModal,
  ) { }

  ngOnInit() {
    this.modalityForm = new ModalityPageForm(this.formBuilder).createForm();
    this.getModalities();
    this.loadModality();
  }

  async loadModality() {
    let response = await this.modalityService.findModality(this.gid);
    if (response.sucess = true) {
      this.modality = response.data[0];
      this.bid = response.data[1];
      console.log(this.bid);
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

  async addModality(body: {}){
    const response = await this.modalityService.addModality(body);
    console.log(body);
    if (response.success == true){
      this.Toast.fire({
        icon: "success",
        title: response.message,
      });
      this.getModalities();
    } else {
      this.Toast.fire({
        icon: "error",
        title: response.message,
      });
    }
  }

  ok(body: any) {
    this.addModality(body);
    this.getModalities();
  }


  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.addModality(ev.detail.data);
    }
  }


}
