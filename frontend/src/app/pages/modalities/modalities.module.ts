import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalitiesPageRoutingModule } from './modalities-routing.module';

import { ModalitiesPage } from './modalities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalitiesPageRoutingModule
  ],
  declarations: [ModalitiesPage]
})
export class ModalitiesPageModule {}
