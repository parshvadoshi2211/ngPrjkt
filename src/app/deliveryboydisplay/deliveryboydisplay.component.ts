import { Component, OnInit, ViewChild } from '@angular/core';
import { DeliveryBoy } from './deliveryboy';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DeliveryboydataService } from './deliveryboydata.service';
import { DeliveryboyViewmoreComponent } from './deliveryboy-viewmore/deliveryboy-viewmore.component';
import { ViewmoreComponent } from '../display-user/viewmore/viewmore.component';

@Component({
  selector: 'app-deliveryboydisplay',
  templateUrl: './deliveryboydisplay.component.html',
  styleUrls: ['./deliveryboydisplay.component.css']
})
export class DeliveryboydisplayComponent implements OnInit {
  dBoyArr:DeliveryBoy[]=[];
  displayedColumns:string[]=['delete','d_id','d_name','d_EmailId','action'];
  dataSource:MatTableDataSource <DeliveryBoy>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private _deliveryData:DeliveryboydataService,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(row: DeliveryBoy)
  {
      if(confirm("are you want to delete? ")) {
        this._deliveryData.delteDBoy(row.d_id).subscribe(
          (data:any)=>{
            this.dBoyArr.splice(this.dBoyArr.indexOf(row),1)
            this.dataSource.data=this.dBoyArr;
          }
        );
      }
  }

  onEdit(row){
  }

  onViewMore(row){
    this._dialog.open(DeliveryboyViewmoreComponent,{
      data:row
    });
  }

  ngOnInit() {
    this._deliveryData.getAllDBoy().subscribe(
      (data:DeliveryBoy[])=>{
        this.dBoyArr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
