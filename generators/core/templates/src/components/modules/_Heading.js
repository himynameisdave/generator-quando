import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Heading = ({ size, children, classNames }) => {
  const headingSizeMap = {
    'x-large': (<h1
      className={classnames(
        'heading',
        'heading-t-xlarge',
        classNames)}>{children}</h1>),
    'large':   (<h2
      className={classnames(
        'heading',
        'heading-t-large',
        classNames)}>{children}</h2>),
    'medium':  (<h3
      className={classnames(
        'heading',
        'heading-t-medium',
        classNames)}>{children}</h3>),
    'small':   (<h4
      className={classnames(
        'heading',
        'heading-t-small',
        classNames)}>{children}</h4>),
    'x-small': (<h5
      className={classnames(
        'heading',
        'heading-t-xsmall',
        classNames)}>{children}</h5>)
  };
  return headingSizeMap[size];
};

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node,
  classNames: PropTypes.string
};

export default Heading;
