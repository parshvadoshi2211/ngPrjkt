import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { categories } from '../category';

@Component({
  selector: 'app-categoryviewmore',
  templateUrl: './categoryviewmore.component.html',
  styleUrls: ['./categoryviewmore.component.css']
})
export class CategoryviewmoreComponent implements OnInit {

  cat_id:number;
  cn:string;
  constructor(public dialogref: MatDialogRef<CategoryviewmoreComponent>,
              @Inject(MAT_DIALOG_DATA) public data: categories, ) { }

  ngOnInit() {
    this.cat_id = this.data.cat_id;
    this.cn =  this.data.cat_name;
   }

  oncancelClick() {
    this.dialogref.close();
}
}
