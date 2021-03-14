import { timeStamp } from "console";
import { Product } from "./Product";

export class SuperSale extends Product {
  constructor(sellIn: number, price: number) {
    super("Super Sale", sellIn, price);
  }

  updatePrice() {
    this.sellIn--;
    this.sellIn < 0 ? (this.price -= 4) : (this.price -= 2);
    this.price < 0 ? (this.price = 0) : null;
  }
}
