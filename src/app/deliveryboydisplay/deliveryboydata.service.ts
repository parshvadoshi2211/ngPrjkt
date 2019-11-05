import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryboydataService {
  public url:string="http://localhost:3000/deliveryboy/";
  constructor(private _http:HttpClient) { }
  getAllDBoy(){
    return this._http.get(this.url);
  }
  delteDBoy(d_id:number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + d_id, { headers: x });
  }
}
