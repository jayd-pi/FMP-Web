import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  constructor(private cartService: CartService){}
  public products: any = [];
  public grandTotal!: number;

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  getTotalQuantity(product: any): number {
    return this.products.reduce((total: any, p: any) => {
      return p.title === product.title ? total + p.quantity : total;
    }, 0);
  }
}
