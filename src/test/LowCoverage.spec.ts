import {LowCoverage} from '../Models/Products/LowCoverage';
import {IProduct} from '../Models/Products/Product';


describe('Low Coverge product update price per day', () => {
 
  it('Day 3 ', () => {
    const lowCoverageProduct = new LowCoverage(5,7);

    const LowCoverageWithUpdatedPrice :IProduct = {
        name:'Low Coverage',
        sellIn:3,
        price:5
    }
    for(let i=1; i<=2; i++){
      lowCoverageProduct.updatePrice() 
    }

    expect(LowCoverageWithUpdatedPrice).toEqual(lowCoverageProduct)
  })

  it('Day 5', () => {
    const lowCoverageProduct = new LowCoverage(5,7);

    const LowCoverageWithUpdatedPrice :IProduct = {
        name:'Low Coverage',
        sellIn:0,
        price:2
    }
    for(let i=1; i<=5; i++){
      lowCoverageProduct.updatePrice() 
    }

    expect(LowCoverageWithUpdatedPrice).toEqual(lowCoverageProduct)
  })

  it('Day 8', () => {
    const lowCoverageProduct = new LowCoverage(5,7);

    const LowCoverageWithUpdatedPrice :IProduct = {
        name:'Low Coverage',
        sellIn:-3,
        price:0
    }
    for(let i=1; i<=8; i++){
      lowCoverageProduct.updatePrice() 
    }

    expect(LowCoverageWithUpdatedPrice).toEqual(lowCoverageProduct)
  })
})