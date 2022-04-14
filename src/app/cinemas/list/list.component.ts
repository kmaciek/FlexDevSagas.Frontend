import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../shared/backend/backend.service";
import {Cinema} from "../../shared/models/cinema";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cinemas!: Cinema[];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getCinemas().subscribe(result => {
        this.cinemas = result;
      }
    );
  }

}
