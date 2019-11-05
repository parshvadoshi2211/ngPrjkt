import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { categories } from './category';


@Injectable({
  providedIn: 'root'
})
export class CategorydataService {

  public url:string="http://localhost:3000/categary";
  constructor(private _http:HttpClient) { }
  getAllCategory()
  {
    return this._http.get(this.url);
  }
  deleteCategory(cat_id:number)
  {
    let x = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url + cat_id , {headers : x});
  }
}
