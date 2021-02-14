import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/propTypes';
import styles from './Text.module.scss';

const config = {
  heading1: {
    tag: `h1`,
    color: `primary`,
  },
  heading2: {
    tag: `h2`,
    color: `primary`,
  },
  body1: {
    tag: `p`,
    color: `text`,
  },
  body2: {
    tag: `p`,
    color: `text`,
  },
  meta1: {
    tag: `span`,
    color: `text-alt`,
  },
};

export default function Text(props) {
  props = Object.assign({ as: `p` }, config[props.type ?? `body1`], props);

  const Component = props.as;
  return (
    <Component
      className={classNames(
        // Can be more verbose, but this would suffice
        styles[`text--weight-${props.weight}`],
        styles[`text--color-${props.color}`],
        styles[`text--align-${props.align}`],
        styles[`text--type-${props.type}`],
        styles[`text--type-${props.transform}`],
        props.className,
        styles.text,
      )}
    >
      {props.children}
    </Component>
  );
}

Text.propTypes = {
  as: PropTypes.elementType,
  type: PropTypes.oneOf([`heading1`, `heading2`, `body1`, `body2`, `meta1`]),
  color: PropTypes.string,
  weight: PropTypes.oneOf([`normal`, `bold`]),
  align: PropTypes.oneOf([`start`, `center`, `end`]),
  transform: PropTypes.oneOf([`unset`, `capitalize`, `uppercase`, `lowercase`]),
  className: ClassNamesPropType,
  children: PropTypes.node,
};
