import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotSettingsPage } from './bot-settings.page';

const routes: Routes = [
  {
    path: '',
    component: BotSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotSettingsPageRoutingModule {}
