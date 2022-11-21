import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import ColorTile from '../Colors/ColorTile';
import SizeTile from '../Sizes/SizeTile';
import { useState } from 'react';
import ProductImage from '../productImage/productImage';

const Product = ({ colors, title, basePrice, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [price, setPrice] = useState(basePrice);

  const handleSize = (name) => {
    setCurrentSize(name);
  };

  const handlePrice = (additionalPrice) => {
    const finalPrice = setPrice(basePrice + additionalPrice);

    return finalPrice;
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
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <SizeTile
                  name={size.name}
                  currentSize={currentSize}
                  key={size.name}
                  handleAction={handleSize}
                  additionalPrice={size.additionalPrice}
                  changePrice={handlePrice}
                />
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <ColorTile
                  key={color}
                  color={color}
                  currentColor={currentColor}
                  handleAction={handleColor}
                />
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
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
