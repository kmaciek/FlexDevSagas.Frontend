import {Component, Input, OnInit, Output} from '@angular/core';
import {Row} from "../../shared/models/row";
import {Seat} from "../../shared/models/seat";
import {SelectedSeat} from "../../shared/models/selected-seat";

@Component({
  selector: 'app-cinema-seats',
  templateUrl: './cinema-seats.component.html',
  styleUrls: ['./cinema-seats.component.scss']
})
export class CinemaSeatsComponent implements OnInit {

  @Output() selectedSeats: SelectedSeat[] = [];

  @Input() rows!: Row[];
  @Input() showButtons: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonCLick(row: Row, seat: Seat) {
    let selectedSeat = new SelectedSeat(seat, row);

    if (this.seatReserverd(seat)) {
      this.selectedSeats = this.selectedSeats.filter((value, index, arr) => {
        return value.seat.id !== seat.id
      });
    } else {
      this.selectedSeats.push(selectedSeat);
    }
  }

  seatReserverd(seat: Seat) {
    return typeof(this.selectedSeats.find(s => { return s.seat.id == seat.id })) !== "undefined";
  }
}
