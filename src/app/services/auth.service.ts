import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/signUpUsers';

  constructor(private http: HttpClient) { }

  login(obj: any){
    return this.http.get<any>(`${this.apiUrl}?username=${obj.username}&password=${obj.password}`);
   }

  signUp(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, user);
  }
}
