import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  url:string="http://localhost:3000/carts/";
  constructor(private _http:HttpClient) { }

  getAllCarts() {
    return this._http.get(this.url);
  }
  deleteCarts(cart_id:number) {
    let x=new HttpHeaders ().set('Content-Type','application/json');
    return this._http.delete(this.url + cart_id , {headers:x});
  }
  addCarts(cart_id:number) {
    let body=JSON.stringify(cart_id);
    let x=new HttpHeaders ().set('Content-Type','application/json');
    return this._http.post(this.url , body , { headers : x});
  }
}
