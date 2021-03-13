import { Product } from "./Product";

export class FullCoverage extends Product {    
    updatePricePerDay(){
        this.sellIn--;
        this.price--;
    }
}