import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ClassNamesPropType } from '../../utils/proptypes';
import Text from '../Text';
import styles from './Button.module.scss';

export default function Button({
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  color = `lime`,
  type = `solid`,
  as = `button`,
  className,
  children,
  ...props
}) {
  return (
    <Text
      {...props}
      className={classNames(
        styles[`button--color-${color}`],
        styles[`button--type-${type}`],
        styles.button,
        className,
      )}
      lineHeight='normal'
      font='secondary'
      weight='bold'
      type='body1'
      as={as}
    >
      {LeftIcon && (
        <span className={classNames(styles[`icon--left`], styles.icon)}>
          <LeftIcon />
        </span>
      )}
      <span>{children}</span>
      {RightIcon && (
        <span className={classNames(styles[`icon--right`], styles.icon)}>
          <RightIcon />
        </span>
      )}
    </Text>
  );
}

Button.propTypes = {
  as: PropTypes.elementType,
  className: ClassNamesPropType,
  rightIcon: PropTypes.elementType,
  leftIcon: PropTypes.elementType,
  color: PropTypes.string,
  type: PropTypes.oneOf([`solid`, `outline`, `ghost`]),
  children: PropTypes.node,
};
