import styles from './ProductForm.module.scss';
import ColorTile from '../ColorTile/ColorTile';
import SizeTile from '../SizeTile/SizeTile';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = ({
  addToCart,
  sizes,
  currentColor,
  currentSize,
  handleSize,
  handlePrice,
  colors,
  handleColor,
}) => {
  return (
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
  );
};

ProductForm.propTypes = {
  addToCart: PropTypes.func.isRequired,
  handleColor: PropTypes.func.isRequired,
  handlePrice: PropTypes.func.isRequired,
  handleSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm;
