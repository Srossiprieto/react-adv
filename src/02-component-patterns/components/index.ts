import { ProductCard as ProductCardHoc } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export * from './ProductTitle';
export * from './ProductImage';
export * from './ProductButtons';

export const ProductCard = Object.assign(ProductCardHoc, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});

export default ProductCard;