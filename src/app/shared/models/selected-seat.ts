import {Seat} from "./seat";
import {Row} from "./row";

export class SelectedSeat {
  seat: Seat;
  row: Row;

  constructor(seat: Seat, row: Row) {
    this.seat = seat;
    this.row = row;
  }
}
