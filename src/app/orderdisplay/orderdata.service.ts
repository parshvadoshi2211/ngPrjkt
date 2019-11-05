import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderdataService {
  public url:string="http://localhost:3000/order/";

  constructor(private _http:HttpClient) { }
  getAllOrder() {
    return this._http.get(this.url);
  }
  deleteOrder(order_id:number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + order_id, { headers: x });
  }
}
