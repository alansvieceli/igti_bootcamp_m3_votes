import React from 'react';
import Position from './componentes/Position';
import Picture from './componentes/Picture';
import Info from './componentes/Info';
import Name from './componentes/Name';
import Votes from './componentes/Votes';
import Percentage from './componentes/Percentage';
import Popularity from './componentes/Popularity';

import css from './cadidate.module.css';

const Candidate = ({ data, index, previousVote, previousPercentege }) => {
  const { id, name, votes, percentage, popularity } = data;
  const imagemSource = `${id}.jpg`;

  return (
    <div className={css.flexRow}>
      <Position>{index}</Position>
      <Picture imageSource={imagemSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previousValue={previousVote} />
        <Percentage value={percentage} previousValue={previousPercentege} />
        <Popularity value={popularity} />
      </Info>
    </div>
  );
};

export default Candidate;
