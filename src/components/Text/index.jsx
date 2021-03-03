import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/proptypes';
import cap from '../../utils/cap';
import * as styles from './Text.module.scss';

const config = {
  heading1: {
    lineHeight: `relaxed`,
    font: `secondary`,
    color: `white`,
    as: `h1`,
  },
  heading2: {
    lineHeight: `relaxed`,
    font: `primary`,
    color: `white`,
    as: `h2`,
  },
  body1: {
    lineHeight: `spaced`,
    font: `primary`,
    color: `white`,
    as: `p`,
  },
  body2: {
    lineHeight: `spaced`,
    font: `primary`,
    color: `white`,
    as: `p`,
  },
  meta1: {
    lineHeight: `normal`,
    font: `secondary`,
    color: `gray`,
    as: `span`,
  },
};

export default function Text({ className, children, type, ..._props }) {
  if (__DEV__) {
    if (type && !config[type]) {
      throw new Error(`${type} is not a valid text type`);
    }
  }

  const {
    as: Component,
    lineHeight,
    transform,
    weight,
    align,
    color,
    font,
    ...props
  } = Object.assign({ as: `p` }, config[type] ?? {}, _props);

  return (
    <Component
      {...props}
      className={classNames(
        lineHeight && styles[`containerLineHeight${cap(lineHeight)}`],
        transform && styles[`containerTransform${cap(transform)}`],
        weight && styles[`containerWeight${cap(weight)}`],
        align && styles[`containerAlign${cap(align)}`],
        color && styles[`containerColor${cap(color)}`],
        font && styles[`containerFont${cap(font)}`],
        styles[`containerType${cap(type)}`],
        styles.container,
        className,
      )}
    >
      {children}
    </Component>
  );
}

Text.propTypes = {
  className: ClassNamesPropType,
  as: PropTypes.elementType,
  children: PropTypes.node,
  color: PropTypes.string,
  font: PropTypes.oneOf([`primary`, `secondary`]),
  lineHeight: PropTypes.oneOf([`normal`, `spaced`, `relaxed`]),
  transform: PropTypes.oneOf([`uppercase`, `lowercase`, `capitalize`, `none`]),
  align: PropTypes.oneOf([`start`, `center`, `end`]),
  weight: PropTypes.oneOf([`normal`, `bold`]),
  type: PropTypes.oneOf([`heading1`, `heading2`, `body1`, `body2`, `meta1`]),
};
