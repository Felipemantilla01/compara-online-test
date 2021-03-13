import {FullCoverage} from '../Models/Products/FullCoverage';
import {IProduct} from '../Models/Products/Product';


describe('Medium Coverge product update price per day', () => {
 
  it('Day 1 ', () => {
    const fullCoverageProduct = new FullCoverage(2,0);

    const FullCoverageWithUpdatedPrice :IProduct = {
        name:'Full Coverage',
        sellIn:1,
        price:1
    }
    fullCoverageProduct.updatePrice()

    expect(FullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct)
  })

  it('Day 4', () => {
    const fullCoverageProduct = new FullCoverage(2,0);

    const FullCoverageWithUpdatedPrice :IProduct = {
        name:'Full Coverage',
        sellIn:-2,
        price:6
    }

    for(let i=1; i<=4; i++){
      fullCoverageProduct.updatePrice() 
    }

    expect(FullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct)
  })

  it('Day 27', () => {
    const fullCoverageProduct = new FullCoverage(2,0);

    const FullCoverageWithUpdatedPrice :IProduct = {
        name:'Full Coverage',
        sellIn:-25,
        price:50
    }
    for(let i=1; i<=27; i++){
      fullCoverageProduct.updatePrice() 
    }

    expect(FullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct)
  })
})