import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError } from 'rxjs/internal/operators/catchError';
import { CartService } from 'src/app/services/cart.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  selectedQuantity: number = 1;
  public cartItemList: any = [];

  constructor(private productService: ProductService,private route: ActivatedRoute, private cartService: CartService){}

  ngOnInit(): void {
      const productId = this.route.snapshot.params['id'];
      this.productService.getProductById(productId)
        .pipe(
          catchError(err => {
            console.error('Error fetching product details:', err);
            return EMPTY;
          })
        )
        .subscribe(
          (product: Product) => {
            this.product = product;
          }
        );
    }
    addToCart(item: any){
      this.cartService.addToCart(item)
    }
    getTotalPrice(){
      let grandTotal =0;
      this.cartItemList.map((item: any) =>{
        grandTotal += item.total * item.quantity
      })
      return grandTotal;
    }
  }

