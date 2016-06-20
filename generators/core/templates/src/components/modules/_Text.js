import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Text = ({ children, classNames }) => (
  <p className={classnames('text', classNames)}>
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string
};

export default Text;
