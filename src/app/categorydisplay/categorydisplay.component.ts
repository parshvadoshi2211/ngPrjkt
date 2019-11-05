import { Component, OnInit, ViewChild } from '@angular/core';
import { categories } from './category';
import { CategorydataService } from './categorydata.service';
import { MatTableDataSource,MatPaginator,MatSort, MatDialog } from '@angular/material';
import { CategoryviewmoreComponent } from './categoryviewmore/categoryviewmore.component';

@Component({
  selector: 'app-categorydisplay',
  templateUrl: './categorydisplay.component.html',
  styleUrls: ['./categorydisplay.component.css']
})
export class CategorydisplayComponent implements OnInit {

  catarr : categories[] = [];
  displayedColumns: string[] = ['delete','cat_id', 'cat_name','Action'];
  dataSource: MatTableDataSource<categories>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _data:CategorydataService , public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }


   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {

    this._data.getAllCategory().subscribe(
      (data:categories[])=>{
        this.catarr=data;
        this.dataSource.data=data;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    );
  }

  onDelete(row)
  {
    if(confirm("Are you sure you want to Delete?"))
    {
      this._data.deleteCategory(row.cat_id).subscribe(
       (data:any) => {
         this.catarr.splice(this.catarr.indexOf(row),1);
         this.dataSource.data=this.catarr;
         }
      );
    }
  }

  onAllDeleteData()
  {

  }

  onViewmore(row)
  {
    this._dialog.open(CategoryviewmoreComponent,{
      data:row
    });
  }

}
