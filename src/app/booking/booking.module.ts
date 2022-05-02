import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingsTableComponent } from './bookings-table/bookings-table.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    BookingsTableComponent
  ],
    imports: [
        CommonModule,
        BookingRoutingModule,
        MatTableModule
    ]
})
export class BookingModule { }
