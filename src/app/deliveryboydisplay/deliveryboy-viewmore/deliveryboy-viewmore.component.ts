import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeliveryBoy } from '../deliveryboy';

@Component({
  selector: 'app-deliveryboy-viewmore',
  templateUrl: './deliveryboy-viewmore.component.html',
  styleUrls: ['./deliveryboy-viewmore.component.css']
})
export class DeliveryboyViewmoreComponent implements OnInit {

  d_id:number=0;
  d_name:string="";
  d_address:string="";
  d_mobileno:string="";
  d_EmailId:string="";

  constructor(public dialogref:MatDialogRef<DeliveryboyViewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DeliveryBoy ,) { }

  ngOnInit() {
    this.d_id=this.data.d_id;
    this.d_name=this.data.d_name;
    this.d_address=this.data.d_address;
    this.d_mobileno=this.data.d_mobileno;
    this.d_EmailId=this.data.d_EmailId;
  }

  onCancelClick() {
    this.dialogref.close();
  }

}
