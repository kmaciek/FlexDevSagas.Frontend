import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import {MatTableModule} from "@angular/material/table";
import { OrderDetailsComponent } from './order-details/order-details.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    OrdersTableComponent,
    OrderDetailsComponent
  ],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        MatTableModule,
        MatProgressSpinnerModule
    ]
})
export class OrdersModule { }
