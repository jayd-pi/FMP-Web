import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public products: any = [];
  public grandTotal!: number;
  selectedQuantity: number = 1;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

  }
  removeItem(item: any, quantityToRemove: number) {
    this.cartService.removeItemCart(item, quantityToRemove);
  }
  emptyCart() {
    this.cartService.removeAllItemCart();
  }

  getTotalQuantity(product: any): number {
    return this.products.reduce((total: any, p: any) => {
      return p.title === product.title ? total + p.quantity : total;
    }, 0);
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.cartService.updateCartItem(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.updateCartItem(item);
      this.grandTotal = this.cartService.getTotalPrice();
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
      this.cartService.removeItemCart(item, 1);
    }
  }

  checkout() {
  }
}

