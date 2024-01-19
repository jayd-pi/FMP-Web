import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastFewTransService {
private apiUrl = 'http://localhost:3000/lst-trans';

  constructor(private http: HttpClient) {}

  getLastFewTrans(){
    return this.http.get<any>(this.apiUrl).pipe(map((res: any)=>{
      return res;
    }))
  }
}
