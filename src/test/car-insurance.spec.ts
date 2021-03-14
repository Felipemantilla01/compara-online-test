import { IProduct, Product } from "../Models/Product";
import { CarInsurance } from "../Models/CarInsurance";

describe("Car Insurance update price per day", () => {
  it("Day 30", () => {
    let carInsurance = new CarInsurance([
      new Product("Medium Coverage", 10, 20),
      new Product("Full Coverage", 2, 0),
      new Product("Low Coverage", 5, 7),
      new Product("Mega Coverage", 0, 80),
      new Product("Mega Coverage", -1, 80),
      new Product("Special Full Coverage", 15, 20),
      new Product("Special Full Coverage", 10, 49),
      new Product("Special Full Coverage", 5, 49),
      new Product("Super Sale", 3, 6),
    ]);
    const carInsuranceWithUpdatedPrice = new CarInsurance([
      new Product("Medium Coverage", -20, 0),
      new Product("Full Coverage", -28, 50),
      new Product("Low Coverage", -25, 0),
      new Product("Mega Coverage", 0, 80),
      new Product("Mega Coverage", -1, 80),
      new Product("Special Full Coverage", -15, 0),
      new Product("Special Full Coverage", -20, 0),
      new Product("Special Full Coverage", -25, 0),
      new Product("Super Sale", -27, 0),
    ]);
    for (let i = 1; i <= 30; i++) {
      carInsurance.updatePrice();
    }

    expect(carInsuranceWithUpdatedPrice).toEqual(carInsurance);
  });
});
