import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../models/cinema";
import {ScheduledMovie} from "../models/scheduled-movie";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = "https://localhost:10443";

  constructor(private http: HttpClient) { }

  getCinemas() : Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.baseUrl + "/cinemas");
  }

  getCinema(id: string) : Observable<Cinema> {
    return this.http.get<Cinema>(this.baseUrl + "/cinemas/" + id);
  }

  getScheduledMoviesForCinema(id: string) : Observable<ScheduledMovie[]> {
    return this.http.get<ScheduledMovie[]>(this.baseUrl + "/scheduledMovies/findByCinema/" + id);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + "/movies");
  }

  createScheduledMovie(data: { start: any; auditoriumId: string; cinemaId: string, price: any; movieId: any; end: any }) {
    return this.http.post(this.baseUrl + "/scheduledMovies", data);

  }
}
