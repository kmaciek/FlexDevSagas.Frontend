import {Component, Input, OnInit} from '@angular/core';
import {Cinema} from "../../shared/models/cinema";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  @Input() cinema!: Cinema;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cinema.name);
  }

}
