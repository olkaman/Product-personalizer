import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../productImage/productImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ colors, title, basePrice, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [price, setPrice] = useState(basePrice);

  const handleSize = (name) => {
    setCurrentSize(name);
  };

  const handlePrice = (additionalPrice) => {
    setPrice(basePrice + additionalPrice);
  };

  const handleColor = (color) => {
    setCurrentColor(color);
  };

  const addToCart = (e) => {
    e.preventDefault();

    console.log('ORDER');
    console.log('=========');
    console.log('Name:', title);
    console.log('Price:', price);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage alt={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          addToCart={addToCart}
          handleColor={handleColor}
          handleSize={handleSize}
          handlePrice={handlePrice}
          sizes={sizes}
          colors={colors}
          currentColor={currentColor}
          currentSize={currentSize}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
