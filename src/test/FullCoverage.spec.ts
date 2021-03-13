import {FullCoverage} from '../Models/Products/FullCoverage';
import {IProduct} from '../Models/Products/Product';

// const moviesApi: IResource = new MoviesApi()
const fullCoverageProduct = new FullCoverage('Full Coverage',20,10);

describe('Full Coverge product update price per day', () => {
  it('should update the price', () => {

    const FullCoverageWithUpdatedPrice :IProduct = {
        name:'Full Coverage',
        sellIn:19,
        price:9
    }
    fullCoverageProduct.updatePricePerDay()

    expect(FullCoverageWithUpdatedPrice).toEqual(fullCoverageProduct)
  })
})