import { Product } from "./Product";

export class SpecialFullCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super("Special Full Coverage", sellIn, price);
  }

  updatePrice() {
    this.sellIn--;
    this.price++;
    this.sellIn < 10 ? this.price++ : null;
    this.sellIn < 5 ? this.price++ : null;
    this.sellIn < 0 ? (this.price = 0) : null;
    this.price > 50 ? (this.price = 50) : null;
  }
}
