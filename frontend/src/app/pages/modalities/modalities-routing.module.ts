import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalitiesPage } from './modalities.page';

const routes: Routes = [
  {
    path: '',
    component: ModalitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalitiesPageRoutingModule {}
