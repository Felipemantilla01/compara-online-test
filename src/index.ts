import { CarInsurance } from "./Models/CarInsurance";
import { Product } from "./Models/Product";
import * as fs from "fs";

const outputFilePath = "./products_after_30_days.txt";
// check if the process start with --30-days argument to create a log on outputFilePath
const _30daysOutput: boolean = process.argv.slice(2).find((e) => "--30-days")
  ? true
  : false;

// delete prev stream output if exists 
if (_30daysOutput) {
  try {
    fs.unlinkSync(outputFilePath);
  } catch (error) {}
}

// create a new stream output
var stream = fs.createWriteStream(outputFilePath);

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

let x = 30;
print(`-------- day 0 --------`);
print(`name, sellIn, price`);
carInsurance.products.forEach((product) => {
  print(`${product.name}, ${product.sellIn}, ${product.price}`);
});
print(`\r`);

for (let i = 1; i <= x; i++) {
  carInsurance.updatePrice();
  print(`-------- day ${i} --------`);
  print(`name, sellIn, price`);
  carInsurance.products.forEach((product) => {
    print(`${product.name}, ${product.sellIn}, ${product.price}`);
  });
  print(`\r`);
}

function print(msg: string) {
  console.log(msg);
  _30daysOutput ? stream.write(`${msg} \n`) : null;
}
