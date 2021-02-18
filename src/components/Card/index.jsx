import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/proptypes';
import styles from './Card.module.scss';

export default function Card({
  backgroundColor = 'darkviolet',
  as: Component = 'div',
  type = 'material',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={classNames(
        styles[`container--color-${backgroundColor}`],
        styles[`container--type-${type}`],
        styles.container,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Card.propTypes = {
  className: ClassNamesPropType,
  as: PropTypes.elementType,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  type: PropTypes.oneOf(['material', 'flat']),
};
