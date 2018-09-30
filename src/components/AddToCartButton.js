import React, { PureComponent } from 'react'

export default class AddToCartButton extends PureComponent {
  addToCart = () => this.props.addToCartFcn(this.props.product)
  render() {
    return (
      <button className="add_to_basket" onClick={this.addToCart}>Ekle</button>
    )
  }
}

