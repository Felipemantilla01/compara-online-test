import { IProduct, Product } from "../Models/Product";

describe("Special Full Coverage product update price per day", () => {
  it("Day 1 ", () => {
    const specialFullCoverageProduct = new Product(
      "Special Full Coverage",
      11,
      30
    );

    const specialFullCoverageWithUpdatedPrice: IProduct = {
      name: "Special Full Coverage",
      sellIn: 10,
      price: 31,
    };
    specialFullCoverageProduct.updatePrice();

    expect(specialFullCoverageWithUpdatedPrice).toEqual(
      specialFullCoverageProduct
    );
  });

  it("Day 3", () => {
    const specialFullCoverageProduct = new Product(
      "Special Full Coverage",
      11,
      30
    );

    const specialFullCoverageWithUpdatedPrice: IProduct = {
      name: "Special Full Coverage",
      sellIn: 8,
      price: 35,
    };

    for (let i = 1; i <= 3; i++) {
      specialFullCoverageProduct.updatePrice();
    }

    expect(specialFullCoverageWithUpdatedPrice).toEqual(
      specialFullCoverageProduct
    );
  });

  it("Day 8", () => {
    const specialFullCoverageProduct = new Product(
      "Special Full Coverage",
      11,
      30
    );

    const specialFullCoverageWithUpdatedPrice: IProduct = {
      name: "Special Full Coverage",
      sellIn: 3,
      price: 47,
    };
    for (let i = 1; i <= 8; i++) {
      specialFullCoverageProduct.updatePrice();
    }

    expect(specialFullCoverageWithUpdatedPrice).toEqual(
      specialFullCoverageProduct
    );
  });

  it("Day 11", () => {
    const specialFullCoverageProduct = new Product(
      "Special Full Coverage",
      11,
      30
    );

    const specialFullCoverageWithUpdatedPrice: IProduct = {
      name: "Special Full Coverage",
      sellIn: 0,
      price: 50,
    };
    for (let i = 1; i <= 11; i++) {
      specialFullCoverageProduct.updatePrice();
    }

    expect(specialFullCoverageWithUpdatedPrice).toEqual(
      specialFullCoverageProduct
    );
  });

  it("Day 12", () => {
    const specialFullCoverageProduct = new Product(
      "Special Full Coverage",
      11,
      30
    );

    const specialFullCoverageWithUpdatedPrice: IProduct = {
      name: "Special Full Coverage",
      sellIn: -1,
      price: 0,
    };
    for (let i = 1; i <= 12; i++) {
      specialFullCoverageProduct.updatePrice();
    }

    expect(specialFullCoverageWithUpdatedPrice).toEqual(
      specialFullCoverageProduct
    );
  });
});
