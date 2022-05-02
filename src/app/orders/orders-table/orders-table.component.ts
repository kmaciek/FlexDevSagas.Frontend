import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../shared/backend/backend.service";
import {Order} from "../../shared/models/order";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  orders!: Order[];
  displayedColumns: string[] = ['id', 'numberOfSeats', 'state', 'totalPrice', 'actions'];

  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe(result => {
      this.orders = result;
    })
  }

}
