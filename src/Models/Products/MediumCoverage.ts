import { Product } from "./Product";

export class MediumCoverage extends Product {
  constructor(sellIn: number, price: number) {
    super("Medium Coverage", sellIn, price);
  }

  updatePrice() {
    this.sellIn--;
    this.sellIn<0?this.price-=2:this.price--;
    this.price<0?this.price=0:null;
  }
}
