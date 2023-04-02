import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {IonicModule, IonicRouteStrategy, IonModal} from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule   } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    NgHttpLoaderModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService, IonModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
