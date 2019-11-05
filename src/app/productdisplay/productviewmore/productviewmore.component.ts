import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../product';

@Component({
  selector: 'app-productviewmore',
  templateUrl: './productviewmore.component.html',
  styleUrls: ['./productviewmore.component.css']
})
export class ProductviewmoreComponent implements OnInit {

  pro_id:number=0;
  pro_name:string="";
  pro_price:number=0;
  pro_qty:Number=0;
  pro_mfg:string="";
  pro_img:string="";
  pro_info:string="";
  constructor(public dialogref:MatDialogRef<ProductviewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,) { }

  ngOnInit() {
    this.pro_id=this.data.pro_id;
    this.pro_name=this.data.pro_name;
    this.pro_price=this.data.pro_price;
    this.pro_qty=this.data.pro_qty;
    this.pro_mfg=this.data.pro_mfg;
    this.pro_img=this.data.pro_img;
    this.pro_info=this.data.pro_info;
  }
  onCancelClick() {
      this.dialogref.close();
  }
}
