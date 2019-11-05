import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsdataService {
  public url:string="http://localhost:3000/orderdetails/";
  constructor(private _http:HttpClient) { }

  getAllDetails() {
    return this._http.get(this.url);
  }
  deleteOrderDetails(od_id:number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + od_id, { headers: x });
  }
}
