import {  ProductCard  } from '../components'
import { ProductButtons } from '../components/ProductButtons';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import "../styles/custom-styles.css";

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
        gap: '1rem',
      }}>
        <ProductCard product={Product} className='bg-dark text-white'>
          <ProductCard.Image img={Product.img} title={Product.title} className='custom-image' />
          <ProductCard.Title title={Product.title} className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={Product} className='bg-dark text-white'>
          <ProductImage img={Product.img} title={Product.title} className='custom-image' />
          <ProductTitle title={Product.title} className=' text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>


        <ProductCard product={Product} style={{ backgroundColor: '#70d1f8' }}>
          <ProductImage img={Product.img} title={Product.title}  />
          <ProductTitle title={Product.title}  />
          <ProductButtons  />
        </ProductCard>

      </div>
    </div>
    </>
  )
}
