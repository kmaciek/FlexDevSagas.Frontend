import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../../shared/backend/backend.service";
import {Cinema} from "../../shared/models/cinema";
import {ScheduledMovie} from "../../shared/models/scheduled-movie";

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent implements OnInit {

  cinema!: Cinema;
  scheduledMovies!: ScheduledMovie[];
  displayedColumns: string[] = ['id', 'name', 'start', 'end', 'actions'];

  constructor(private route: ActivatedRoute, private service: BackendService) {}

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.service.getCinema(result['id']).subscribe(result => {
        this.cinema = result;
      });
      this.service.getScheduledMoviesForCinema(result['id']).subscribe(result => {
        this.scheduledMovies = result;
      });
    });
  }

}
