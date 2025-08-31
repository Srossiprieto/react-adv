import React from 'react'
import {  ProductCard  } from '../components'
import { ProductImage, ProductTitle, ProductButtons } from '../components'

const Product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <>
    <div>
      ShoppingPage
      <hr />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem'
      }}>
        <ProductCard product={Product} >
          <ProductCard.Image img={Product.img} title={Product.title} />
          <ProductCard.Title title={Product.title} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={Product} >
          <ProductImage img={Product.img} title={Product.title} />
          <ProductTitle title={Product.title} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
    </>
  )
}
