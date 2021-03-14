"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarInsurance_1 = require("./Models/CarInsurance");
var Product_1 = require("./Models/Product");
var fs = require("fs");
var outputFilePath = "./products_after_30_days.txt";
// check if the process start with --30-days argument to create a log on outputFilePath
var _30daysOutput = process.argv.slice(2).find(function (e) { return "--30-days"; })
    ? true
    : false;
// delete prev stream output if exists 
if (_30daysOutput) {
    try {
        fs.unlinkSync(outputFilePath);
    }
    catch (error) { }
}
// create a new stream output
var stream = fs.createWriteStream(outputFilePath);
var carInsurance = new CarInsurance_1.CarInsurance([
    new Product_1.Product("Medium Coverage", 10, 20),
    new Product_1.Product("Full Coverage", 2, 0),
    new Product_1.Product("Low Coverage", 5, 7),
    new Product_1.Product("Mega Coverage", 0, 80),
    new Product_1.Product("Mega Coverage", -1, 80),
    new Product_1.Product("Special Full Coverage", 15, 20),
    new Product_1.Product("Special Full Coverage", 10, 49),
    new Product_1.Product("Special Full Coverage", 5, 49),
    new Product_1.Product("Super Sale", 3, 6),
]);
var x = 30;
print("-------- day 0 --------");
print("name, sellIn, price");
carInsurance.products.forEach(function (product) {
    print(product.name + ", " + product.sellIn + ", " + product.price);
});
print("\r");
for (var i = 1; i <= x; i++) {
    carInsurance.updatePrice();
    print("-------- day " + i + " --------");
    print("name, sellIn, price");
    carInsurance.products.forEach(function (product) {
        print(product.name + ", " + product.sellIn + ", " + product.price);
    });
    print("\r");
}
function print(msg) {
    console.log(msg);
    _30daysOutput ? stream.write(msg + " \n") : null;
}
