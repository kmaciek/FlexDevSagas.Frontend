import {Movie} from "./movie";

export class ScheduledMovie {
  id: string;
  start: Date;
  end: Date;
  price: number;
  movie: Movie;

  constructor(id: string, start: Date, end: Date, price: number, movie: Movie) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.price = price;
    this.movie = movie;
  }
}
