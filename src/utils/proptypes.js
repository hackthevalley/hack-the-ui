import PropTypes from 'prop-types';

const _ClassNamesPropType = PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.bool),
    PropTypes.string,
]);

export const ClassNamesPropType = PropTypes.oneOfType([
    // If you need even more nesting than this, then you're insane
    PropTypes.arrayOf(_ClassNamesPropType),
    _ClassNamesPropType,
]);