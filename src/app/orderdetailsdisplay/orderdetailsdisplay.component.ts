import { Component, OnInit, ViewChild } from '@angular/core';
import { orDetails } from './orderdetails';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { OrderdetailsdataService } from './orderdetailsdata.service';

@Component({
  selector: 'app-orderdetailsdisplay',
  templateUrl: './orderdetailsdisplay.component.html',
  styleUrls: ['./orderdetailsdisplay.component.css']
})
export class OrderdetailsdisplayComponent implements OnInit {
  orderDetailsArr:orDetails[]=[];
  displayedColumns:string[]=['delete','od_id','price','pro_id','order_id','action'];
  dataSource:MatTableDataSource <orDetails>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private _orderdetailsData:OrderdetailsdataService,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(row: orDetails)
  {
      if(confirm("are you want to delete? ")) {
        this._orderdetailsData.deleteOrderDetails(row.od_id).subscribe(
          (data:any)=>{
            this.orderDetailsArr.splice(this.orderDetailsArr.indexOf(row),1)
            this.dataSource.data=this.orderDetailsArr;
          }
        );
      }
  }

  onEdit(row){
  }

  onViewMore(row){
    // this._dialog.open(DeliveryboyViewmoreComponent,{
    //   data:row
    // });
  }

  ngOnInit() {
    this._orderdetailsData.getAllDetails().subscribe(
      (data:orDetails[])=>{
        this.orderDetailsArr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
