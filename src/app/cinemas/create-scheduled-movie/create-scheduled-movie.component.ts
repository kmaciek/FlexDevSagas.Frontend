import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ScheduledMovie} from "../../shared/models/scheduled-movie";
import {Movie} from "../../shared/models/movie";
import {BackendService} from "../../shared/backend/backend.service";
import {FormControl} from "@angular/forms";
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-scheduled-movie',
  templateUrl: './create-scheduled-movie.component.html',
  styleUrls: ['./create-scheduled-movie.component.scss']
})
export class CreateScheduledMovieComponent implements OnInit {

  @ViewChild('picker') picker: any;

  private auditoriumId!: string;
  private cinemaId!: string;
  startDate = new FormControl(new Date());
  startHour = new FormControl(0);
  startMinutes = new FormControl(0);
  endHour = new FormControl(0);
  endMinutes = new FormControl(0);
  endDate = new FormControl(new Date());
  price = new FormControl(0);
  movie = new FormControl(null);

  movies!: Movie[];

  constructor(private route: ActivatedRoute, private service: BackendService, private _location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.auditoriumId = result['auditoriumId'];
      this.cinemaId = result['cinemaId'];
      this.service.getMovies().subscribe(result => {
        this.movies = result;
      });
    });
  }

  addMovie() {
    var startDateTime = this.startDate.value;
    startDateTime.setHours(this.startHour.value);
    startDateTime.setMinutes(this.startMinutes.value);

    var endDateTime = this.endDate.value;
    endDateTime.setHours(this.endHour.value);
    endDateTime.setMinutes(this.endMinutes.value);

    var data = {
      start: startDateTime.toISOString(),
      end: endDateTime.toISOString(),
      price: this.price.value,
      movieId: this.movie.value,
      auditoriumId: this.auditoriumId,
      cinemaId: this.cinemaId
    };

    this.service.createScheduledMovie(data).subscribe(result => {
      this._location.back();
    });
  }
}
