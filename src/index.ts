import { CarInsurance } from "./Models/CarInsurance";
import { FullCoverage } from "./Models/Products/FullCoverage";

let fc = new FullCoverage("Full Coverage", 2,0);
let ci = new CarInsurance([fc]);

let x = 27
for(let i=1; i<=x;i++){
    console.log('day: ', i)
    ci.updatePrice()    
}