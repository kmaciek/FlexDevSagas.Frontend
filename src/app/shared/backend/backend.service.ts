import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../models/cinema";
import {ScheduledMovie} from "../models/scheduled-movie";
import {Movie} from "../models/movie";
import {ScheduledMovieBookingDetails} from "../models/scheduled-movie-booking-details";
import {Order} from "../models/order";
import {OrderDetails} from "../models/order-details";
import {Reservation} from "../models/reservation";

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

  getScheduledMovieBookingDetails(scheduledMovieId: string): Observable<ScheduledMovieBookingDetails> {
    return this.http.get<ScheduledMovieBookingDetails>(this.baseUrl + "/booking/getScheduledMovieBookingDetails/" + scheduledMovieId);
  }

  createOrder(scheduledMovieId: string, seats: string[]) {
    return this.http.post(this.baseUrl + "/orders", {
      scheduledMovieId: scheduledMovieId,
      seats: seats
    });
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "/orders");
  }

  getOrderDetails(orderId: string): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(this.baseUrl + "/orders/" + orderId);
  }

  orderReservationPaid(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/orders/" + id + "/paid");
  }

  orderTicketsCollected(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/orders/" + id + "/ticketsCollected");
  }

  orderCancelled(id: string): Observable<any> {
    return this.http.get(this.baseUrl + "/orders/" + id + "/cancelled");
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl + "/booking/reservations");
  }
}
