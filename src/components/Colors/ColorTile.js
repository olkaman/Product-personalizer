import styles from './ColorTile.module.scss';
import clsx from 'clsx';

const ColorTile = ({ color, currentColor, handleAction }) => {
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1)];
  };

  const handleClick = () => {
    handleAction(color);
  };

  return (
    <li>
      <button
        type='button'
        className={clsx(
          prepareColorClassName(color),
          currentColor === color && styles.active
        )}
        onClick={handleClick}
      />
    </li>
  );
};

export default ColorTile;
