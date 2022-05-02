export class Order {
  id: string;
  numberOfSeats: number;
  orderState: string;
  totalPrice: number;

  constructor(id: string, numberOfSeats: number, state: string, totalPrice: number) {
    this.id = id;
    this.numberOfSeats = numberOfSeats;
    this.orderState = state;
    this.totalPrice = totalPrice;
  }
}
