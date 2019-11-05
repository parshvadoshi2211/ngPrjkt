import { Component, OnInit, ViewChild } from '@angular/core';
import {  deliverdetails } from './deliverdetails';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DeliverdetailsdataService } from './deliverdetailsdata.service';

@Component({
  selector: 'app-deliverdetailsdisplay',
  templateUrl: './deliverdetailsdisplay.component.html',
  styleUrls: ['./deliverdetailsdisplay.component.css']
})
export class DeliverdetailsdisplayComponent implements OnInit {
  dBoydetailsArr:deliverdetails[]=[];
  displayedColumns:string[]=['delete','detail_id','bill_id','d_id','u_EmailId','u_Address','action'];
  dataSource:MatTableDataSource <deliverdetails>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _deliverdetailsData:DeliverdetailsdataService,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(row: deliverdetails)
  {
      if(confirm("are you want to delete? ")) {
        this._deliverdetailsData.deleteDeliverDetails(row.detail_id).subscribe(
          (data:any)=>{
            this.dBoydetailsArr.splice(this.dBoydetailsArr.indexOf(row),1)
            this.dataSource.data=this.dBoydetailsArr;
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
    this._deliverdetailsData.getAllDeliverDetails().subscribe(
      (data:deliverdetails[])=>{
        this.dBoydetailsArr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
