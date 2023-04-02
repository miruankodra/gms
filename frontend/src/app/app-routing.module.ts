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
  },
  {
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
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'bot-settings',
    loadChildren: () => import('./pages/bot-settings/bot-settings.module').then( m => m.BotSettingsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./pages/log/log.module').then( m => m.LogPageModule)
  },
  {
    path: 'enroll',
    loadChildren: () => import('./Authentication/enroll/enroll.module').then( m => m.EnrollPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./Authentication/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./Authentication/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  // {
  //   path: 'password-email',
  //   loadChildren: () => import('./Authentication/password-email/password-email.module').then( m => m.PasswordEmailPageModule)
  // },
  {
    path: 'verify-reset',
    loadChildren: () => import('./Authentication/verify-reset/verify-reset.module').then(m => m.VerifyResetPageModule)
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
