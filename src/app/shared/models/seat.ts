export class Seat {
  Id: string;
  Number: number;
  Reserved: boolean;

  constructor(id: string, number: number, reserved: boolean) {
    this.Id = id;
    this.Number = number;
    this.Reserved = reserved;
  }
}
