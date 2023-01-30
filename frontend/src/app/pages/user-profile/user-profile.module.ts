import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { UserProfilePage } from './user-profile.page';
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
