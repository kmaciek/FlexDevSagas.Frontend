import {OrderMovieDetails} from "./order-movie-details";

export class OrderDetails {
  id: string;
  orderStatus: string;
  totalPrice: number;
  movies: OrderMovieDetails[];

  constructor(id: string, orderStatus: string, totalPrice: number, movies: OrderMovieDetails[]) {
    this.id = id;
    this.orderStatus = orderStatus;
    this.totalPrice = totalPrice;
    this.movies = movies;
  }
}
