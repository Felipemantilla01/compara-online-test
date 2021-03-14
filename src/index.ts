import { CarInsurance } from "./Models/CarInsurance";
import { Product } from "./Models/Product";


let ci = new CarInsurance([
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

let x = 3;
for (let i = 1; i <= x; i++) {
  console.log("day: ", i);
  ci.updatePrice();
}
