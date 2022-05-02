import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../shared/backend/backend.service";
import {ActivatedRoute} from "@angular/router";
import {OrderDetails} from "../../shared/models/order-details";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails = new OrderDetails('', '', 0, []);
  isProcessing: boolean = true;
  constructor(private route: ActivatedRoute, private service: BackendService) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.refreshOrder(result['id']);
    });
  }

  refreshOrder(id: string) {
    this.service.getOrderDetails(id).subscribe(result => {
      this.orderDetails = result;
      this.isProcessing = false;
    });
  }

  reservationPaid() {
    this.isProcessing = true;
    this.service.orderReservationPaid(this.orderDetails.id).subscribe(result => {
      setTimeout(() => {
        this.refreshOrder(this.orderDetails.id);
      }, 1000);
    });
  }

  ticketsCollected() {
    this.isProcessing = true;
    this.service.orderTicketsCollected(this.orderDetails.id).subscribe(result => {
      setTimeout(() => {
        this.refreshOrder(this.orderDetails.id);
      }, 1000);
    });
  }

  orderCancelled() {
    this.isProcessing = true;
    this.service.orderCancelled(this.orderDetails.id).subscribe(result => {
      setTimeout(() => {
        this.refreshOrder(this.orderDetails.id);
      }, 1000);
    });
  }
}
