import React from 'react';

import css from './picture.module.css';

const Picture = ({ imageSource, description }) => {
  return (
    <div>
      <img
        className={css.picture}
        src={imageSource}
        alt={description}
        title={description}
      />
    </div>
  );
};

export default Picture;
