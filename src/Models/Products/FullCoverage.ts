import { Product } from "./Product";

export class FullCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super("Full Coverage", sellIn, price);
  }

  updatePrice() {
    this.sellIn--;
    this.sellIn < 0 ? (this.price += 2) : this.price++;
    this.price > 50 ? (this.price = 50) : null;
  }
}
