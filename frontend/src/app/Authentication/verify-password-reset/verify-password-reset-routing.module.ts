import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPasswordResetPage } from './verify-password-reset.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyPasswordResetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyPasswordResetPageRoutingModule {}
