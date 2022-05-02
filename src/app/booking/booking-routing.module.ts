import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingsTableComponent} from "./bookings-table/bookings-table.component";

const routes: Routes = [
  { path: '', component: BookingsTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
