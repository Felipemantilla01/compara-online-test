"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
    Product.prototype.updatePrice = function () {
        switch (this.name) {
            case "Low Coverage":
                this.sellIn--;
                this.price--;
                this.sellIn < 0 ? (this.price = 0) : null;
                break;
            case "Medium Coverage":
                this.sellIn--;
                this.sellIn < 0 ? (this.price -= 2) : this.price--;
                this.price < 0 ? (this.price = 0) : null;
                break;
            case "Full Coverage":
                this.sellIn--;
                this.sellIn < 0 ? (this.price += 2) : this.price++;
                this.price > 50 ? (this.price = 50) : null;
                break;
            case "Mega Coverage":
                this.price = 80;
                this.sellIn <= 0 ? null : (this.sellIn = 0);
                break;
            case "Special Full Coverage":
                this.sellIn--;
                this.price++;
                this.sellIn < 10 ? this.price++ : null;
                this.sellIn < 5 ? this.price++ : null;
                this.sellIn < 0 ? (this.price = 0) : null;
                this.price > 50 ? (this.price = 50) : null;
                break;
            case "Super Sale":
                this.sellIn--;
                this.sellIn < 0 ? (this.price -= 4) : (this.price -= 2);
                this.price < 0 ? (this.price = 0) : null;
                break;
        }
    };
    return Product;
}());
exports.Product = Product;
