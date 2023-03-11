import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPasswordResetPageRoutingModule } from './verify-password-reset-routing.module';

import { VerifyPasswordResetPage } from './verify-password-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPasswordResetPageRoutingModule
  ],
  declarations: [VerifyPasswordResetPage]
})
export class VerifyPasswordResetPageModule {}
