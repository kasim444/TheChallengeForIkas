import React from 'react'
import AddToCartButton from './AddToCartButton'

import toPrice from '../lib/currency'

export default ({ product, addToCartFcn }) => {

  const { imageThumbnail, imageThumbnailAltText, name, price } = product

  return (
    <article className="product_summary">
      <img className="product_image" src={'/images/' + imageThumbnail} alt={imageThumbnailAltText} />
      <h1 className="product_title">{name}</h1>
      <span className="product_price">{toPrice(price)}</span>
      <AddToCartButton product={product} addToCartFcn={addToCartFcn} />
    </article>
  )
}
