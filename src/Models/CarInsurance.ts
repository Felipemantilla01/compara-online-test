import { Product } from "./Product";

export class CarInsurance {
  products: Array<Product>;

  constructor(products: Array<Product>) {
    this.products = products;
  }

  updatePrice() {
    for (let product of this.products) {
      product.updatePrice();
    }
  }
}
