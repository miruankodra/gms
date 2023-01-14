import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'test', redirectTo: 'folder/Inbox', pathMatch: 'full' },
  {path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./Authentication/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Authentication/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./Authentication/login/login.module').then(m => m.LoginPageModule)
  },  {
    path: 'climate',
    loadChildren: () => import('./pages/climate/climate.module').then( m => m.ClimatePageModule)
  },
  {
    path: 'control-panel',
    loadChildren: () => import('./pages/control-panel/control-panel.module').then( m => m.ControlPanelPageModule)
  },
  {
    path: 'modalities',
    loadChildren: () => import('./pages/modalities/modalities.module').then( m => m.ModalitiesPageModule)
  },



  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
