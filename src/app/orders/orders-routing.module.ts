import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersTableComponent} from "./orders-table/orders-table.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";

const routes: Routes = [
  { path: '', component: OrdersTableComponent },
  { path: ':id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
