import { Component, OnInit, ViewChild } from '@angular/core';
import { carts } from './cart';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CartdataService } from './cartdata.service';

@Component({
  selector: 'app-cartdisplay',
  templateUrl: './cartdisplay.component.html',
  styleUrls: ['./cartdisplay.component.css']
})
export class CartdisplayComponent implements OnInit {

  cartarr:carts[]=[];

  displayedColumns:string[]=['delete','cart_id','u_Name','pro_name','cart_qty','Action'];
  dataSource:MatTableDataSource<carts>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(public _cartdata:CartdataService,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }


  ngOnInit() {
    this._cartdata.getAllCarts().subscribe(
      (data:carts[])=>{
        console.log(data)
        this.cartarr=data;
          this.dataSource.data=data;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
      }
    );
  }

  onDelete(row){
    if(confirm("Are you sure you want to delete?")){
      this._cartdata.deleteCarts(row.cart_id).subscribe(
        (data:any)=>{
          this.cartarr.splice(this.cartarr.indexOf(row),1);
          this.dataSource.data=this.cartarr;
        }
      );
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
