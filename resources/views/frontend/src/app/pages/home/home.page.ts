 import { Component } from '@angular/core';
 import { Route, ActivatedRoute } from '@angular/router';
 import { map } from 'rxjs/operators';
 import { Observable, observable } from 'rxjs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChartModule } from '@syncfusion/ej2-angular-charts';


export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any[];
  labels: any[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public options: Partial<ChartOptions>;
  public airHumidity: Partial<ChartOptions>;
  public areaOptions: Partial<ChartOptions>;
  public soilHumidity: Partial<ChartOptions>;
  greenhouse: Array<any>;
  token: string;
  user_id: any;
  g_name: string;
  g_location: string;
  g_area: any;
  g_owner: string;
  user: Array<any>;
  username: string;
  temp: Array<any>;
  day: Array<any>;
  



  


  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    ) {
    // this.spackLine();
    // this.barChart();
    this.areaChart();
    // this.radialChart();
  }

  

  ngOnInit() {

    

    this.activatedRoute.queryParams
      .subscribe(params => {
        console.log(params); 

        this.user = JSON.parse(params.user);
    
        this.username = this.user['username'];
        
      })


      this.http.post('http://127.0.0.1:8000/api/dashboard', {
        api_token: this.user['api_token'],
        user_id: this.user['id'],
    })
    .subscribe((response:any) => {   
      // console.log(response);
      this.greenhouse = response['greenhouse'];
      console.log(this.greenhouse);

      this.g_name = this.greenhouse['name'];
      this.g_area = this.greenhouse['area'];
      this.g_location = this.greenhouse['location'];

      this.temp = response['temp'];
      this.day = response['day'];
      
      
      })



      
  }

  

  areaChart() {
    this.areaOptions = {
      chart: {
        type: 'area',
        height: 180,
        sparkline: {
          enabled: true,
        },
      },
      series: [{
        data:[this.temp],
        
    }],
      xaxis:{
        categories:this.day,
      },
      // yaxis: {
      //   categories: this.temp,
      // },
      stroke: {
        width: 2,
        colors: ['#ffd3a5'],
      },
      fill: {
        colors: ['#ffd3a5'],
        gradient: {
          gradientToColors: ['#2b2d3e'],
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
      colors: ['#DCE6EC'],
      title: {
        text: 'Temperature',
        offsetX: 30,
        style: {
          fontSize: '24px',
          color: '#78909c',
        },
      },
      subtitle: {
        text: 'Air',
        offsetX: 30,
        style: {
          fontSize: '14px',
          color: '#78909c',
        },
      },
    }
    this.airHumidity = {
    
      chart: {
        type: 'area',
        height: 180,
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: 'Sales',
          data: [
            47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
            53, 61, 27, 54, 43, 19, 46,
          ],
        },
      ],
      stroke: {
        width: 2,
        colors: ['#ffd3a5'],
      },
      fill: {
        colors: ['#ffd3a5'],
        gradient: {
          gradientToColors: ['#2b2d3e'],
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
      colors: ['#DCE6EC'],
      title: {
        text: 'Humidity',
        offsetX: 30,
        style: {
          fontSize: '24px',
          color: '#78909c',
        },
      },
      subtitle: {
        text: 'Soil',
        offsetX: 30,
        style: {
          fontSize: '14px',
          color: '#78909c',
        },
      },
    }
    this.soilHumidity = {
    
      chart: {
        type: 'area',
        height: 180,
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: 'Sales',
          data: [
            47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
            53, 61, 27, 54, 43, 19, 46,
          ],
        },
      ],
      stroke: {
        width: 2,
        colors: ['#ffd3a5'],
      },
      fill: {
        colors: ['#ffd3a5'],
        gradient: {
          gradientToColors: ['#2b2d3e'],
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
      colors: ['#DCE6EC'],
      title: {
        text: 'Humidity',
        offsetX: 30,
        style: {
          fontSize: '24px',
          color: '#78909c',
        },
      },
      subtitle: {
        text: 'Air',
        offsetX: 30,
        style: {
          fontSize: '14px',
          color: '#78909c',
        },
      },
    }
  }

 
  


 

}
