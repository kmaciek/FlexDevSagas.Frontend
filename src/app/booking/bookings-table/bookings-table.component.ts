import { Component, OnInit } from '@angular/core';
import {Order} from "../../shared/models/order";
import {Reservation} from "../../shared/models/reservation";
import {BackendService} from "../../shared/backend/backend.service";

@Component({
  selector: 'app-bookings-table',
  templateUrl: './bookings-table.component.html',
  styleUrls: ['./bookings-table.component.scss']
})
export class BookingsTableComponent implements OnInit {

  reservations!: Reservation[];
  displayedColumns: string[] = ['id', 'movie', 'seat', 'status'];
  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.service.getReservations().subscribe(result => {
      this.reservations = result;
    })
  }

}
