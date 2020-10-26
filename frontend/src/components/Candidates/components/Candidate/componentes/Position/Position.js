import React from 'react';

import css from './position.module.css';

const Position = ({ children }) => {
  return <div className={css.position}>{children}</div>;
};

export default Position;
