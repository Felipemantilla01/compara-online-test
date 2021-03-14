import { IProduct, Product } from "../Models/Product";

describe("Low Coverage product update price per day", () => {
  it("Day 2 ", () => {
    const lowCoverageProduct = new Product("Low Coverage", 5, 7);

    const lowCoverageWithUpdatedPrice: IProduct = {
      name: "Low Coverage",
      sellIn: 3,
      price: 5,
    };
    for (let i = 1; i <= 2; i++) {
      lowCoverageProduct.updatePrice();
    }

    expect(lowCoverageWithUpdatedPrice).toEqual(lowCoverageProduct);
  });

  it("Day 5", () => {
    const lowCoverageProduct = new Product("Low Coverage", 5, 7);

    const lowCoverageWithUpdatedPrice: IProduct = {
      name: "Low Coverage",
      sellIn: 0,
      price: 2,
    };
    for (let i = 1; i <= 5; i++) {
      lowCoverageProduct.updatePrice();
    }

    expect(lowCoverageWithUpdatedPrice).toEqual(lowCoverageProduct);
  });

  it("Day 8", () => {
    const lowCoverageProduct = new Product("Low Coverage", 5, 7);

    const lowCoverageWithUpdatedPrice: IProduct = {
      name: "Low Coverage",
      sellIn: -3,
      price: 0,
    };
    for (let i = 1; i <= 8; i++) {
      lowCoverageProduct.updatePrice();
    }

    expect(lowCoverageWithUpdatedPrice).toEqual(lowCoverageProduct);
  });
});
