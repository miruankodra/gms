import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPasswordResetPageRoutingModule } from './verify-reset-routing.module';

import { VerifyResetPage } from './verify-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPasswordResetPageRoutingModule
  ],
  declarations: [VerifyResetPage]
})
export class VerifyResetPageModule {}
