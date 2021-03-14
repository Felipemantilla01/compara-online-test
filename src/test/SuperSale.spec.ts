import {SuperSale} from '../Models/Products/SuperSale';
import {IProduct} from '../Models/Product';


describe('Super Sale product update price per day', () => {
 
  it('Day 3 ', () => {
    const superSaleProduct = new SuperSale(6,30);

    const superSaleWithUpdatedPrice :IProduct = {
        name:'Super Sale',
        sellIn:3,
        price:24
    }
    for(let i=1; i<=3; i++){
      superSaleProduct.updatePrice() 
    }

    expect(superSaleWithUpdatedPrice).toEqual(superSaleProduct)
  })

  it('Day 8', () => {
    const superSaleProduct = new SuperSale(6,30);

    const superSaleWithUpdatedPrice :IProduct = {
        name:'Super Sale',
        sellIn:-2,
        price:10
    }
    for(let i=1; i<=8; i++){
      superSaleProduct.updatePrice() 
    }

    expect(superSaleWithUpdatedPrice).toEqual(superSaleProduct)
  })

  it('Day 11', () => {
    const superSaleProduct = new SuperSale(6,30);

    const superSaleWithUpdatedPrice :IProduct = {
        name:'Super Sale',
        sellIn:-5,
        price:0
    }
    for(let i=1; i<=11; i++){
      superSaleProduct.updatePrice() 
    }

    expect(superSaleWithUpdatedPrice).toEqual(superSaleProduct)
  })
})