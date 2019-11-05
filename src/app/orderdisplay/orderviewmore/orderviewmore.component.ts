import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { orders } from '../orderes';

@Component({
  selector: 'app-orderviewmore',
  templateUrl: './orderviewmore.component.html',
  styleUrls: ['./orderviewmore.component.css']
})
export class OrderviewmoreComponent implements OnInit {

  order_id:number;
  bill_id:number;
  bill_date:Date;
  order_status:string;
  order_amt:number;
  order_payment:string;
  order_discount:number;
  order_ispaid:string;
  order_spc_instruction:string;
  order_gross_amt:number;
  order_total_amt:number;
  fk_u_EmailId:string;
  fk_d_id:number;
  constructor(public dialogref:MatDialogRef<OrderviewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: orders,) { }

  ngOnInit() {
    this.order_id=this.data.order_id;
    this.bill_id=this.data.bill_id;
    this.bill_date=this.data.bill_date;
    this.order_status=this.data.order_status;
    this.order_amt=this.data.order_amt;
    this.order_payment=this.data.order_payment;
    this.order_discount=this.data.order_discount;
    this.order_spc_instruction=this.data.order_spc_instruction;
    this.order_gross_amt=this.data.order_gross_amt;
    this.order_total_amt=this.data.order_total_amt;
    this.fk_u_EmailId=this.data.fk_u_EmailId;
    this.fk_d_id=this.data.fk_d_id;
  }

  onCancelClick() {
    this.dialogref.close();
}
}
