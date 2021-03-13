import { CarInsurance } from "./Models/CarInsurance";
import { FullCoverage } from "./Models/Products/FullCoverage";

let fc = new FullCoverage("Full Coverage", 10, 20);
let ci = new CarInsurance([fc]);

ci.updatePrice()