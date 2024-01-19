import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDark = false;
  public searchTerm !: string;
  public totalItem: number = 0;
  users: any;
  constructor(private cartService: CartService, private userService: UserService, private router: Router ){}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any)=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  onLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  getID(id: number){
    this.userService.getUserById(id).subscribe((res: any) =>{
      this.users = res;
    })
  }
  toggleTheme() {
    if (!this.isDark) {
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    }
  }
}
