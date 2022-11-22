import clsx from 'clsx';
import styles from './SizeTile.module.scss';
import PropTypes from 'prop-types';

const SizeTile = ({
  name,
  currentSize,
  handleAction,
  changePrice,
  additionalPrice,
}) => {
  const handleClick = () => {
    handleAction(name);
    changePrice(additionalPrice);
  };

  return (
    <button
      type='button'
      className={clsx(name === currentSize && styles.active)}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

SizeTile.propTypes = {
  currentSize: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  additionalPrice: PropTypes.number.isRequired,
  handleAction: PropTypes.func.isRequired,
  changePrice: PropTypes.func.isRequired,
};

export default SizeTile;
