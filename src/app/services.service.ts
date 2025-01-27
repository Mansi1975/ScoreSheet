import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private http = inject(HttpClient);

  constructor() { }

  getStartups(){
    this.http.get("http://127.0.0.1:8000/api/startups/").subscribe(
      (response: any) => {
        console.log(response);
        // console.log(response.data);
      }
    )
  }
}
