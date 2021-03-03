import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ClassNamesPropType } from '../../utils/proptypes';
import cap from '../../utils/cap';
import Text from '../Text';
import * as styles from './Button.module.scss';

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
        styles[`buttonColor${cap(color)}`],
        styles[`buttonType${cap(type)}`],
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
        <span className={classNames(styles[`iconLeft`], styles.icon)}>
          <LeftIcon />
        </span>
      )}
      <span>{children}</span>
      {RightIcon && (
        <span className={classNames(styles[`iconRight`], styles.icon)}>
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
