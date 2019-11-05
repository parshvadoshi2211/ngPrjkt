import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { ProductdataserviceService } from './productdataservice.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ProductviewmoreComponent } from './productviewmore/productviewmore.component';


@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  productarr:Product[]=[];

  displayedColumns:string[]=['delete','pro_name','pro_price','pro_qty','cat_name','Action'];
  dataSource:MatTableDataSource<Product>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 constructor(public _productdata:ProductdataserviceService,
  public _dialog:MatDialog) {
   this.dataSource=new MatTableDataSource();
  }

  ngOnInit() {
    this._productdata.getAllProduct().subscribe(
      (data:Product[])=>{
        console.log(data)
        this.productarr=data;
          this.dataSource.data=data;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
      }
    );
  }

  onViewMore(row){
   this._dialog.open(ProductviewmoreComponent,{
     data:row
   });
  }

  onDelete(row){
    if(confirm("Are you sure you want to delete?")){
      this._productdata.deleteProduct(row.pro_id).subscribe(
        (data:any)=>{
          this.productarr.splice(this.productarr.indexOf(row),1);
          this.dataSource.data=this.productarr;
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
