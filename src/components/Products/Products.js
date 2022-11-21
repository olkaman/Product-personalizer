import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product) => (
        <Product
          title={product.title}
          id={product.id}
          basePrice={product.basePrice}
          name={product.name}
          key={product.id}
          colors={product.colors}
          sizes={product.sizes}
        />
      ))}
    </section>
  );
};

export default Products;
