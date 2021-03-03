import classNames from 'classnames';
import propTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/proptypes';
import cap from '../../utils/cap';
import * as styles from './Section.module.scss';

export default function Section({
  as: Component = `section`,
  type = `default`,
  backgroundColor,
  atmosphere,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={classNames(
        backgroundColor && styles[`containerColor${cap(backgroundColor)}`],
        styles[`containerType${cap(type)}`],
        styles.container,
      )}
    >
      <div
        {...props}
        className={classNames(
          styles[`contentType${cap(type)}`],
          styles.content,
          className,
        )}
      >
        {children}
      </div>
      {atmosphere}
    </Component>
  );
}

Section.propTypes = {
  backgroundColor: propTypes.string,
  atmosphere: propTypes.node,
  className: ClassNamesPropType,
  children: propTypes.node,
  type: propTypes.oneOf([`default`, `full`]),
};
