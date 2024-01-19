import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface User{
  id:number;
  username: string;
  firstname: string;
  password: string;
  email: string;
  role: string;
  lastname: string;
  phonenumber: string;
  street: string;
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`)
  }
}
