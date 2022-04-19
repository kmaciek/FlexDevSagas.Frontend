import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../shared/backend/backend.service";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe(result => {
      console.log(result);
    })
  }

}
