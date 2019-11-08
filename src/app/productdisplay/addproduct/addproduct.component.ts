import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/categorydisplay/category';
import { ProductdataserviceService } from '../productdataservice.service';
import { Router } from '@angular/router';
import { CategorydataService } from 'src/app/categorydisplay/categorydata.service';
import { Product } from '../product';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  cat_arr: categories[] = [];
  pro_id: number;
  pro_name: string;
  pro_color: string;
  pro_price: number;
  pro_qty: number;
  pro_mfg: string;
  pro_img: string;
  pro_info: string;
  fk_cat_id: number;
  cat_id: categories;
  selected: number;
  constructor(public _data: ProductdataserviceService, public _route: Router, public _catser: CategorydataService) { }
  ngOnInit() {
    this._catser.getAllCategory().subscribe(
      (data: any[]) => {
        console.log(data);
        this.cat_arr = data;
      }
    );
  }
  onProductAdd() {
    console.log('values');
    console.log(this.selected);
    this._data.addproduct(new Product(this.pro_id,this.pro_name,this.pro_color,this.pro_price,this.pro_qty,this.pro_mfg,this.pro_img,this.pro_info,this.selected)).subscribe(
      (data: Product[]) => {
        console.log(data);
        this._route.navigate(['/product']);
      }
    );

  }

}

