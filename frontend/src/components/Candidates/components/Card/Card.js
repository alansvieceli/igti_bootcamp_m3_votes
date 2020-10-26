import React from 'react';
import css from './card.module.css';

const Card = ({ children }) => {
  const classes = `card ${css.cardExtra}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
