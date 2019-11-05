import { Component, OnInit, ViewChild } from '@angular/core';
import { orders } from './orderes';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { OrderdataService } from './orderdata.service';
import { OrderviewmoreComponent } from './orderviewmore/orderviewmore.component';

@Component({
  selector: 'app-orderdisplay',
  templateUrl: './orderdisplay.component.html',
  styleUrls: ['./orderdisplay.component.css']
})
export class OrderdisplayComponent implements OnInit {
  orderArr:orders[]=[];
  displayedColumns:string[]=['delete','order_id','bill_id','u_EmailId','d_id','action'];
  dataSource:MatTableDataSource <orders>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _orderData:OrderdataService,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(row: orders)
  {
      if(confirm("are you want to delete? ")) {
        this._orderData.deleteOrder(row.order_id).subscribe(
          (data:any)=>{
            this.orderArr.splice(this.orderArr.indexOf(row),1)
            this.dataSource.data=this.orderArr;
          }
        );
      }
  }

  onEdit(row){
  }

  onViewMore(row){
    this._dialog.open(OrderviewmoreComponent,{
      data:row
    });
  }
  ngOnInit() {
    this._orderData.getAllOrder().subscribe(
      (data:orders[])=>{
        this.orderArr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
