import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sale-by-category',
  templateUrl: './sale-by-category.component.html',
  styleUrls: ['./sale-by-category.component.scss']
})
export class SaleByCategoryComponent {
  chart = new Chart({
    chart:{
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales',
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ]
    },
    yAxis: {
      title:{
        text:'Revenue in %'
      }
    },
    series: [
      {
        type:'pie',
        data:[
          {
            name:'Electronics',
            y: 40,
            color: '#044342'
          },
          {
            name:'Groceries',
            y: 20,
            color: 'blue'
          },
          {
            name:'Cosmetics',
            y: 10,
            color: '#6920fb'
          },
          {
            name:'Clothes',
            y: 15,
            color: '#121212'
          },
          {
            name:'Appliances',
            y: 15,
            color: '#green'
          }
        ]
      }
    ]
  })
}
