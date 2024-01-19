import { Component, OnInit } from '@angular/core';
import { LastFewTransService } from 'src/app/services/admin/last-few-trans.service';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss']
})
export class LastFewTransactionsComponent implements OnInit {
  transactions: any[] = [];

  constructor(private lastService: LastFewTransService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts(){
    this.lastService.getLastFewTrans().subscribe((data: any)=>{
      this.transactions = data;
      console.log(this.transactions = data);

    })
  }
}
