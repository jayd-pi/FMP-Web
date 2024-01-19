import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    const existingItem = this.cartItemList.find((cartItem: any) => cartItem.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItemList.push({ ...product, quantity: 1 });
    }
    this.productList.next(this.cartItemList);

    this.getTotalPrice();
    }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total * a.quantity;
    })
    return grandTotal;
  }

  removeItemCart(item: any, quantityToRemove: number){
    const index = this.cartItemList.findIndex((cartItemList: any) => cartItemList.id === item.id);
    if (index !== -1) {
      if(this.cartItemList[index].quantity === quantityToRemove) {
        this.cartItemList.splice(index, 1);
      } else if(this.cartItemList[index].quantity > quantityToRemove) {
        this.cartItemList[index].quantity -= quantityToRemove;
      } else{
      }
    }
    this.productList.next([...this.cartItemList]);
  }

  removeAllItemCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }


  updateCartItem(item: any) {
    const existingItem = this.cartItemList.find((cartItem: any) => cartItem.id === item.id);

    if (existingItem) {
      if (item.quantity > 0) {
        existingItem.quantity = item.quantity;
      }
    }
  }
}
