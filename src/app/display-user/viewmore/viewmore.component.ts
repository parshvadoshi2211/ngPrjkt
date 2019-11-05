import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {

  constructor(public dailogref:MatDialogRef<ViewmoreComponent>,
    @Inject(MAT_DIALOG_DATA)public data:User,) { }

  u_EmailId:string;
  u_Name:string;
  u_Address:string;
  u_type:string;
  u_password:string;
  u_mobileno:number;
  u_dob:string;
  u_img:string;
  ngOnInit() {
    this.u_EmailId = this.data.u_EmailId;
    this.u_Name = this.data.u_Name;
    this.u_Address = this.data.u_Address;
    this.u_type = this.data.u_Type;
    this.u_password = this.data.u_password;
    this.u_mobileno = this.data.u_mobileno;
    this.u_dob = this.data.u_dob;
    this.u_img = this.data.u_img;
  }
  onCancelClick() {
    this.dailogref.close();
  }
}
