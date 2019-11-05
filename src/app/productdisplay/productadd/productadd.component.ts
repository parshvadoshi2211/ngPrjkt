import { Component, OnInit } from '@angular/core';
import { ProductdataserviceService } from '../productdataservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {


  selectarr: string[] = ["1","2","3","4"];
  selected: string[] = ["watch","card"];
  constructor(private _proservice:ProductdataserviceService,private _rou:Router) { }

  ngOnInit() {

  }

  onBtnClick(no)
  {
    this._proservice.addproduct(no).subscribe(
      (data:any) => {
        console.log(data);
        this._rou.navigate(['product']);
      }
    );
  }

  // onBtnSave()
  // {
  //   this._proservice.addproduct(this._pro.pro_id).subscribe(
  //     (data:any) =>
  //     {
  //       this._pro.pro_id=data.pro_id;
  //       this._pro.cat_name=data.cat_name;
  //       this._rou.navigate(['product']);
  //     }
  //   );
  // }
}
