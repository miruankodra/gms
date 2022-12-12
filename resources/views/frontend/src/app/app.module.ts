import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule,LineSeriesService } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,LineSeriesService  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
