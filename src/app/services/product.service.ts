import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get<any>(this.apiUrl).pipe(map((res: any)=>{
      return res;
    }))
  }
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/` + productId);
  }
}
