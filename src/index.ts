import { CarInsurance } from "./Models/CarInsurance";
import { FullCoverage } from "./Models/Products/FullCoverage";
import { LowCoverage } from "./Models/Products/LowCoverage";
import { MediumCoverage } from "./Models/Products/MediumCoverage";
import { MegaCoverage } from "./Models/Products/MegaCoverage";
import { SpecialFullCoverage } from "./Models/Products/SpecialFullCoverage";
import { SuperSale } from "./Models/Products/SuperSale";

let ci = new CarInsurance([
    new MediumCoverage(10,20),
    new FullCoverage(2,0),
    new LowCoverage(5,7),
    new MegaCoverage(),
    new MegaCoverage(),
    new SpecialFullCoverage(15,20),
    new SpecialFullCoverage(10,49),
    new SpecialFullCoverage(5,49),
    new SuperSale(3,6)
]);

let x = 3
for(let i=1; i<=x;i++){
    console.log('day: ', i)
    ci.updatePrice()    
}