import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliverdetailsdataService {
  public url:string="http://localhost:3000/deliverdetails/";
  constructor(private _http:HttpClient) { }

  getAllDeliverDetails() {
    return this._http.get(this.url);
  }
  deleteDeliverDetails(detail_id:number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + detail_id, { headers: x });
  }
}
