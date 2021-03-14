import { IProduct, Product } from "../Models/Product";

describe("Mega Coverage product update price per day", () => {
  it("Day 9 ", () => {
    const megaCoverageProduct = new Product("Mega Coverage", 0, 80);

    const megaCoverageWithUpdatedPrice: IProduct = {
      name: "Mega Coverage",
      sellIn: 0,
      price: 80,
    };
    for (let i = 1; i <= 9; i++) {
      megaCoverageProduct.updatePrice();
    }

    expect(megaCoverageWithUpdatedPrice).toEqual(megaCoverageProduct);
  });

  it("Day 11", () => {
    const megaCoverageProduct = new Product("Mega Coverage", 0, 80);

    const megaCoverageWithUpdatedPrice: IProduct = {
      name: "Mega Coverage",
      sellIn: 0,
      price: 80,
    };
    for (let i = 1; i <= 11; i++) {
      megaCoverageProduct.updatePrice();
    }

    expect(megaCoverageWithUpdatedPrice).toEqual(megaCoverageProduct);
  });

  it("Day 16", () => {
    const megaCoverageProduct = new Product("Mega Coverage", 0, 80);

    const megaCoverageWithUpdatedPrice: IProduct = {
      name: "Mega Coverage",
      sellIn: 0,
      price: 80,
    };
    for (let i = 1; i <= 16; i++) {
      megaCoverageProduct.updatePrice();
    }

    expect(megaCoverageWithUpdatedPrice).toEqual(megaCoverageProduct);
  });
});
