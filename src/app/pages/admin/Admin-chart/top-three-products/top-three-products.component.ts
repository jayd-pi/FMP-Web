import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent {
  chart = new Chart({
    chart:{
      type:'bar',
      height: 225
    },
    title: {
      text:' Top 3 Products',
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'Solid Gold Petite Micropave',
        'Mens Cotton Jacket',
        'Jewerly',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
       type: 'bar',
      //  showInLegend: false,
       data: [
         {
           name: 'Solid Gold Petite Micropave',
           y: 395,
           color: '#044342',
         },
         {
           name: 'Mens Cotton Jacket',
           y: 385,
           color: '#7e0505',
         },
         {
           name: 'White Gold Plated Princess',
           y: 275,
           color: '#ed9e20',
         },
       ]
      }
     ],
  })
}
