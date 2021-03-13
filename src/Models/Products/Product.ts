export type ProductType =
  | "Full Coverage"
  | "Low Coverage"
  | "Special Full Coverage"
  | "Super Sale";
export interface IProduct {
  name:ProductType,
  sellIn:number,
  price:number 
}
export class Product implements IProduct {
  sellIn: number;
  name: ProductType;
  price: number;

  constructor(name: ProductType, sellIn: number, price: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePricePerDay() {
    console.log("Default update product");
  }
}
