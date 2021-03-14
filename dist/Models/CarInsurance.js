"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarInsurance = void 0;
var CarInsurance = /** @class */ (function () {
    function CarInsurance(products) {
        this.products = products;
    }
    CarInsurance.prototype.updatePrice = function () {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            product.updatePrice();
        }
    };
    return CarInsurance;
}());
exports.CarInsurance = CarInsurance;
