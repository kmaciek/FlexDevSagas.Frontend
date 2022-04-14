import {Auditorium} from "./auditorium";

export class Cinema {
  id: string;
  name: string;
  auditoriums: Auditorium[];

  constructor(id: string, name: string, auditoriums: Auditorium[]) {
    this.id = id;
    this.name = name;
    this.auditoriums = auditoriums;
  }
}

