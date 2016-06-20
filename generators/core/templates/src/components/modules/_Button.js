import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Button = ({ text, classNames, onButtonClick }) => (
  <button className={classnames('button', classNames)} onClick={onButtonClick}>
    <div className="button-text">{text}</div>
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired
};

export default Button;
