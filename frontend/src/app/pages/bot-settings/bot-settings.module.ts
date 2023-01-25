import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotSettingsPageRoutingModule } from './bot-settings-routing.module';

import { BotSettingsPage } from './bot-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotSettingsPageRoutingModule
  ],
  declarations: [BotSettingsPage]
})
export class BotSettingsPageModule {}
