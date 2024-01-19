import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-sale-by-month',
  templateUrl: './sale-by-month.component.html',
  styleUrls: ['./sale-by-month.component.scss']
})
export class SaleByMonthComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 400
    },
    title: {
      text: 'Month with sales'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: 'Ha Noi',
        type: 'line',
        color:'red',
        data: [
          70, 85, 90, 120, 150, 140, 210, 310, 210, 166, 340, 370
        ]
      },
      {
        name: 'Ho Chi Minh',
        type: 'line',
        color: 'blue',
        data: [
          100, 130, 150, 170, 150, 190, 220, 250, 270, 280, 269, 300
        ]
      },
      {
        name: 'Phu Yen',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 40, 50, 100, 70, 90, 109, 270, 290, 190, 145, 200
        ]
      },
    ]
  })
}
