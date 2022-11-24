import styles from './ColorTile.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react/cjs/react.production.min';

const ColorTile = ({ color, currentColor, handleAction }) => {
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1)];
  };

  //const readyClass = useMemo(() => prepareColorClassName(color), [color]);

  const handleClick = () => {
    handleAction(color);
  };

  return (
    <li>
      <button
        type='button'
        className={clsx(
          styles.colorButton,
          prepareColorClassName(color),
          currentColor === color && styles.active
        )}
        onClick={handleClick}
      />
    </li>
  );
};

ColorTile.propTypes = {
  currentColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default ColorTile;
