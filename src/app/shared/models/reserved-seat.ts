export class ReservedSeat {
  id: string;
  row: number;
  number: number;

  constructor(id: string, row: number, number: number) {
    this.id = id;
    this.row = row;
    this.number = number;
  }
}
