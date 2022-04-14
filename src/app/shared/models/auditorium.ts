import {Row} from "./row";

export class Auditorium {
  id: string;
  number: number;
  capacity: number;
  rows: [Row];

  constructor(id: string, number: number, capacity: number, rows: [Row]) {
    this.id = id;
    this.number = number;
    this.capacity = capacity;
    this.rows = rows;
  }
}
