import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ChartModule} from '@syncfusion/ej2-angular-charts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        NgApexchartsModule,
        ChartModule,
    ],
  declarations: [HomePage],
})
export class HomePageModule {}
