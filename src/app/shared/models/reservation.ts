export class Reservation {
  id: string;
  movieName: string;
  seat: string;
  status: string;

  constructor(id: string, movieName: string, seat: string, status: string) {
    this.id = id;
    this.movieName = movieName;
    this.seat = seat;
    this.status = status;
  }
}

