import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/proptypes';
import styles from './Card.module.scss';

export default function Card({
  as: Component = 'div',
  backgroundColor = '#272532',
  type = 'material',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={classNames(styles.container, className, styles[type])}
      {...props}
      style={{ backgroundColor }}
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
