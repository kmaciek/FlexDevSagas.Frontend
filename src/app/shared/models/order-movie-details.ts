import {ReservedSeat} from "./reserved-seat";

export class OrderMovieDetails {
  description: string;
  title: string;
  reservedSeats: ReservedSeat[];

  constructor(description: string, title: string, reservedSeats: ReservedSeat[]) {
    this.description = description;
    this.title = title;
    this.reservedSeats = reservedSeats;
  }
}
