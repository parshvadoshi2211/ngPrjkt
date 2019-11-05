import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingArr } from './app.routing';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule,MatIconModule,MatButtonModule,MatTableModule, MatSelectModule, MatFormFieldModule, MatPaginatorModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './menubar/menubar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewmoreComponent } from './display-user/viewmore/viewmore.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductviewmoreComponent } from './productdisplay/productviewmore/productviewmore.component';
import { CategoryviewmoreComponent } from './categorydisplay/categoryviewmore/categoryviewmore.component';
import { CategorydisplayComponent } from './categorydisplay/categorydisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { CartdisplayComponent } from './cartdisplay/cartdisplay.component';
import { CartaddComponent } from './cartdisplay/cartadd/cartadd.component';
import { DeliveryboydisplayComponent } from './deliveryboydisplay/deliveryboydisplay.component';
import { DeliveryboyaddComponent } from './deliveryboydisplay/deliveryboyadd/deliveryboyadd.component';
import { DeliveryboyViewmoreComponent } from './deliveryboydisplay/deliveryboy-viewmore/deliveryboy-viewmore.component';
import { DeliverdetailsdisplayComponent } from './deliverdetailsdisplay/deliverdetailsdisplay.component';
import { DeliverdetailsaddComponent } from './deliverdetailsdisplay/deliverdetailsadd/deliverdetailsadd.component';
import { OrderdetailsdisplayComponent } from './orderdetailsdisplay/orderdetailsdisplay.component';
import { OrderdetailsaddComponent } from './orderdetailsdisplay/orderdetailsadd/orderdetailsadd.component';
import { OrderdisplayComponent } from './orderdisplay/orderdisplay.component';
import { OrderaddComponent } from './orderdisplay/orderadd/orderadd.component';
import { OrderviewmoreComponent } from './orderdisplay/orderviewmore/orderviewmore.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    DisplayUserComponent,
    ViewmoreComponent,
    ProductdisplayComponent,
    ProductviewmoreComponent,
    CategorydisplayComponent,
    CategoryviewmoreComponent,
    ProductaddComponent,
    CartdisplayComponent,
    CartaddComponent,
    DeliveryboydisplayComponent,
    DeliveryboyaddComponent,
    DeliveryboyViewmoreComponent,
    DeliverdetailsdisplayComponent,
    DeliverdetailsaddComponent,
    OrderdetailsdisplayComponent,
    OrderdetailsaddComponent,
    OrderdisplayComponent,
    OrderaddComponent,
    OrderviewmoreComponent
  ],
  imports: [
    BrowserModule,
    routingArr,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule
  ],
  entryComponents:[
    ViewmoreComponent,
    ProductviewmoreComponent,
    CategoryviewmoreComponent,
    DeliveryboyViewmoreComponent,
    OrderviewmoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
