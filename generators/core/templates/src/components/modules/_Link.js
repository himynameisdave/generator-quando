import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Link = ({ href, classNames, text, newTab }) => {
  return (
    <a
      href={href}
      className={classnames('link', classNames)}
      target={newTab ? '_blank' : '_self'}
    >{text}</a>
  );
};


export default Link;
