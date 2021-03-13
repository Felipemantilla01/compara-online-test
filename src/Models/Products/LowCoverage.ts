import { Product } from "./Product";

export class LowCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super("Low Coverage", sellIn, price);
  }

  updatePrice() {
    this.sellIn--;
    this.price--;
    this.sellIn < 0 ? (this.price = 0) : null;
  }
}
