import { Component, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { User } from './user';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ViewmoreComponent } from './viewmore/viewmore.component';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
arr:User[]=[];
displayedColumns:string[]=['delete','u_EmailId','u_Name','u_Type','action'];
dataSource:MatTableDataSource <User>;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private _userdataservice:UserserviceService,public _dailog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelete(row: User)
  {


      if(confirm("are you want to delete? "))
      {
        this._userdataservice.deleteData(row.u_EmailId).subscribe(
          (data:any)=>{
            this.arr.splice(this.arr.indexOf(row),1)
            this.dataSource.data=this.arr;
          }
        );

      }

  }
  onEdit(row){
    this._dailog.open(ViewmoreComponent,{
      data:row
    });
  }

  ngOnInit() {
    this._userdataservice.getUserData().subscribe(
      (data:User[])=>{
        this.arr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
