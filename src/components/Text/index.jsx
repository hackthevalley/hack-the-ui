import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ClassNamesPropType } from '../../utils/proptypes';
import styles from './Text.module.scss';

console.log(styles);

export default function Text({
    as: Component = `div`,
    className,
    children,
    ...props
}) {
    return (
        <Component
            className={classNames(
                styles.container,
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

Text.propTypes = {
    className: ClassNamesPropType,
    as: PropTypes.elementType,
    children: PropTypes.node,
};
