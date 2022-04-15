import {Component, OnInit, ViewChild} from '@angular/core';
import {ScheduledMovieBookingDetails} from "../../shared/models/scheduled-movie-booking-details";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {BackendService} from "../../shared/backend/backend.service";
import {CinemaSeatsComponent} from "../cinema-seats/cinema-seats.component";

@Component({
  selector: 'app-book-scheduled-movie',
  templateUrl: './book-scheduled-movie.component.html',
  styleUrls: ['./book-scheduled-movie.component.scss']
})
export class BookScheduledMovieComponent implements OnInit {

  @ViewChild(CinemaSeatsComponent)
  seats!: CinemaSeatsComponent;

  private scheduledMovieId!: string;
  private isProcessing: boolean = false;
  scheduledMovieBookingDetails!: ScheduledMovieBookingDetails;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private service: BackendService) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.scheduledMovieId = result['scheduledMovieId'];

      this.service.getScheduledMovieBookingDetails(this.scheduledMovieId).subscribe(result => {
        this.scheduledMovieBookingDetails = result;
      });
    });
  }

  getSelectedSeatsCount() {
    let totalCount = this.scheduledMovieBookingDetails.auditoriumCapacity - this.scheduledMovieBookingDetails.reservedSeats;
    if (typeof(this.seats) === "undefined") {
      return `0/${totalCount}`;
    }

    return `${this.seats.selectedSeats.length}/${totalCount}`;
  }

  canDisplayTable() {
    return typeof(this.scheduledMovieBookingDetails) !== "undefined" && !this.isProcessing;
  }

  submit() {
    this.isProcessing = true;
    this.service.createOrder(this.scheduledMovieId, this.seats.selectedSeats.map(s => s.seat.id)).subscribe(result => {
      this.location.back();
    });
  }
}
