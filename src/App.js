import React, { Component } from 'react'
import update from 'immutability-helper'

import Product from './components/Product'
import Basket from './components/Basket'
import { products } from './store'

export default class App extends Component {

  state = {
    basket: []
  }

  addToBasket = item => {

    let basket = this.state.basket
    let currentBasketItemIndex = basket.findIndex(bi => bi.id === item.id)

    if (currentBasketItemIndex > -1) {

      let newBasket = {}
      newBasket[currentBasketItemIndex] = {
        quantity: {
          $apply: x => x + 1
        }
      }

      this.setState({
        basket: update(basket, newBasket)
      })

    } else {
      let newBasket = update(item, { $merge: { quantity: 1 } })
      this.setState({
        basket: update(basket, { $push: [newBasket] })
      })
    }
  }

  render() {
    return (
      <div className="shop">
        <div className="product-list">
          {products.map(product => <Product key={product.id} product={product} addToCartFcn={this.addToBasket} />)}
        </div>
        <div className="basket-container">
          <Basket basket={this.state.basket} />
        </div>
      </div>
    );
  }
}
