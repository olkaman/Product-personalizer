import clsx from 'clsx';
import styles from './SizeTile.module.scss';

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

export default SizeTile;
