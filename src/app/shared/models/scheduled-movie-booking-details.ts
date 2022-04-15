import {Row} from "./row";

export class ScheduledMovieBookingDetails {
  movieName: string;
  start: Date;
  end: Date;
  price: number;
  auditoriumNumber: number;
  auditoriumCapacity: number;
  reservedSeats: number;
  rows: Row[];

  constructor(movieName: string, start: Date, end: Date, price: number,
              auditoriumNumber: number, auditoriumCapacity: number, reservedSeats: number, rows: Row[]) {
    this.movieName = movieName;
    this.start = start;
    this.end = end;
    this.price = price;
    this.auditoriumNumber = auditoriumNumber;
    this.auditoriumCapacity = auditoriumCapacity;
    this.reservedSeats = reservedSeats;
    this.rows = rows;
  }
}
