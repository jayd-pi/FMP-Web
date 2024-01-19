import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  filterCategory : any
  searchKey:string ="";

  constructor(private product: ProductService, private cartService: CartService){}
  ngOnInit(): void {
    this.loadAllProducts();
  }
  loadAllProducts(){
    this.product.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.filterCategory = res;
      this.products.forEach((a: any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a, {quantity: 1, total: a.price})
      });
      console.log(this.products);
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addToCart(item: any){
    this.cartService.addToCart(item);
  }
  filter(category:string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
