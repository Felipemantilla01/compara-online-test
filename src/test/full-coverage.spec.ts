import { IProduct, Product } from "../Models/Product";

describe("Full Coverage product update price per day", () => {
  it("Day 1 ", () => {
    const fullCoverageProduct = new Product("Full Coverage", 2, 0);

    const fullCoverageWithUpdatedPrice: IProduct = {
      name: "Full Coverage",
      sellIn: 1,
      price: 1,
    };
    fullCoverageProduct.updatePrice();

    expect(fullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct);
  });

  it("Day 4", () => {
    const fullCoverageProduct = new Product("Full Coverage", 2, 0);

    const fullCoverageWithUpdatedPrice: IProduct = {
      name: "Full Coverage",
      sellIn: -2,
      price: 6,
    };

    for (let i = 1; i <= 4; i++) {
      fullCoverageProduct.updatePrice();
    }

    expect(fullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct);
  });

  it("Day 27", () => {
    const fullCoverageProduct = new Product("Full Coverage", 2, 0);

    const fullCoverageWithUpdatedPrice: IProduct = {
      name: "Full Coverage",
      sellIn: -25,
      price: 50,
    };
    for (let i = 1; i <= 27; i++) {
      fullCoverageProduct.updatePrice();
    }

    expect(fullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct);
  });
});
