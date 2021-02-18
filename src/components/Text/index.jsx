import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/proptypes';
import styles from './Text.module.scss';

const config = {
  heading1: {
    lineHeight: `relaxed`,
    color: `white`,
    as: `h1`,
  },
  heading2: {
    lineHeight: `relaxed`,
    color: `white`,
    as: `h2`,
  },
  body1: {
    lineHeight: `spaced`,
    color: `white`,
    as: `p`,
  },
  body2: {
    lineHeight: `spaced`,
    color: `white`,
    as: `p`,
  },
  meta1: {
    lineHeight: `normal`,
    color: `gray`,
    as: `span`,
  },
};

export default function Text({ className, children, type, ..._props }) {
  if (__DEV__) {
    if (!type) {
      throw new Error(`Please provide a text type`);
    }

    if (!config[type]) {
      throw new Error(`${type} is not a valid text type`);
    }
  }

  const { as: Component, ...props } = Object.assign(
    { as: `p` },
    config[type] ?? {},
    _props,
  );

  return (
    <Component
      {...props}
      className={classNames(
        props.lineHeight &&
          styles[`container--line-height-${props.lineHeight}`],
        props.transform && styles[`container--transform-${props.transform}`],
        props.weight && styles[`container--weight-${props.weight}`],
        props.align && styles[`container--align-${props.align}`],
        props.color && styles[`container--color-${props.color}`],
        styles[`container--type-${type}`],
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
  lineHeight: PropTypes.oneOf([`normal`, `spaced`, `relaxed`]),
  transform: PropTypes.oneOf([`uppercase`, `lowercase`, `capitalize`, `none`]),
  align: PropTypes.oneOf([`start`, `center`, `end`]),
  weight: PropTypes.oneOf([`normal`, `bold`]),
  type: PropTypes.oneOf([`heading1`, `heading2`, `body1`, `body2`, `meta1`]),
};
