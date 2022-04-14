import {Seat} from "./seat";

export class Row {
  id: string;
  number: number;
  seats: [Seat];

  constructor(id: string, number: number, seats: [Seat]) {
    this.id = id;
    this.number = number;
    this.seats = seats;
  }
}
