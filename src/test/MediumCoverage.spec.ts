import {MediumCoverage} from '../Models/Products/MediumCoverage';
import {IProduct} from '../Models/Products/Product';


describe('Medium Coverge product update price per day', () => {
 
  it('Day 9 ', () => {
    const mediumCoverageProduct = new MediumCoverage(10,20);

    const mediumCoverageWithUpdatedPrice :IProduct = {
        name:'Medium Coverage',
        sellIn:1,
        price:11
    }
    for(let i=1; i<=9; i++){
      mediumCoverageProduct.updatePrice() 
    }

    expect(mediumCoverageWithUpdatedPrice).toEqual(mediumCoverageProduct)
  })

  it('Day 11', () => {
    const mediumCoverageProduct = new MediumCoverage(10,20);

    const mediumCoverageWithUpdatedPrice :IProduct = {
        name:'Medium Coverage',
        sellIn:-1,
        price:8
    }
    for(let i=1; i<=11; i++){
      mediumCoverageProduct.updatePrice() 
    }

    expect(mediumCoverageWithUpdatedPrice).toEqual(mediumCoverageProduct)
  })

  it('Day 16', () => {
    const mediumCoverageProduct = new MediumCoverage(10,20);

    const mediumCoverageWithUpdatedPrice :IProduct = {
        name:'Medium Coverage',
        sellIn:-6,
        price:0
    }
    for(let i=1; i<=16; i++){
      mediumCoverageProduct.updatePrice() 
    }

    expect(mediumCoverageWithUpdatedPrice).toEqual(mediumCoverageProduct)
  })
})