import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url: string = 'http://localhost:3000/admin/';

  constructor(private _http: HttpClient) { }
  getUserData() {
    return this._http.get(this.url);
  }
  deleteData(u_EmailId: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + u_EmailId, { headers: x })
  }
}
