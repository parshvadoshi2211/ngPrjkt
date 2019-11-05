import { RouterModule,Routes } from '@angular/router';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { CartdisplayComponent } from './cartdisplay/cartdisplay.component';
import { CartaddComponent } from './cartdisplay/cartadd/cartadd.component';
import { DeliveryboydisplayComponent } from './deliveryboydisplay/deliveryboydisplay.component';
import { DeliveryboyaddComponent } from './deliveryboydisplay/deliveryboyadd/deliveryboyadd.component';
import { DeliverdetailsdisplayComponent } from './deliverdetailsdisplay/deliverdetailsdisplay.component';
import { DeliverdetailsaddComponent } from './deliverdetailsdisplay/deliverdetailsadd/deliverdetailsadd.component';
import { OrderdetailsdisplayComponent } from './orderdetailsdisplay/orderdetailsdisplay.component';
import { OrderdetailsaddComponent } from './orderdetailsdisplay/orderdetailsadd/orderdetailsadd.component';
import { OrderdisplayComponent } from './orderdisplay/orderdisplay.component';
import { OrderaddComponent } from './orderdisplay/orderadd/orderadd.component';
// import { CategoryaddComponent } from './categorydisplay/categoryadd/categoryadd.component';
const arr:Routes=[
  {path:'',component:DisplayUserComponent},
  {path:'product',component:ProductdisplayComponent},
  {path:'productadd' , component:ProductaddComponent},
  {path:'category',component:CategorydisplayComponent},
  // {path:'categoryadd',component:CategoryaddComponent},
  {path:'cart',component:CartdisplayComponent},
  {path:'cartadd',component:CartaddComponent},
  {path:'deliveryboy',component:DeliveryboydisplayComponent},
  {path:'deliveryboyadd',component:DeliveryboyaddComponent},
  {path:'deliverdetails',component:DeliverdetailsdisplayComponent},
  {path:'deliverdetailsadd',component:DeliverdetailsaddComponent},
  {path:'order',component:OrderdisplayComponent},
  {path:'orderadd',component:OrderaddComponent},
  {path:'orderdetails',component:OrderdetailsdisplayComponent},
  {path:'orderdetailsadd',component:OrderdetailsaddComponent}
];
export const routingArr=RouterModule.forRoot(arr);
