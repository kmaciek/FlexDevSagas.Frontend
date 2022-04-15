import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CinemaDetailsComponent} from "./cinema-details/cinema-details.component";
import {CreateScheduledMovieComponent} from "./create-scheduled-movie/create-scheduled-movie.component";
import {BookScheduledMovieComponent} from "./book-scheduled-movie/book-scheduled-movie.component";

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: ':id', component: CinemaDetailsComponent
  },
  {
    path: 'addMovie/:cinemaId/:auditoriumId', component: CreateScheduledMovieComponent
  },
  {
    path: 'addMovie/:cinemaId/:auditoriumId', component: CreateScheduledMovieComponent
  },
  {
    path: 'book/:scheduledMovieId', component: BookScheduledMovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemasRoutingModule { }
