export class Seat {
  id: string;
  number: number;
  isReserved: boolean;

  constructor(id: string, number: number, reserved: boolean) {
    this.id = id;
    this.number = number;
    this.isReserved = reserved;
  }
}
