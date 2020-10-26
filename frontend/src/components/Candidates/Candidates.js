import React from 'react';
import FlipMove from 'react-flip-move';
import Card from './components/Card';
import Candidate from './components/Candidate';

const Candidates = ({ data, previousVotes, previousPercentege }) => {
  return (
    <FlipMove>
      {data.map((candidate, index) => {
        const { id } = candidate;
        const previousVoteObj = previousVotes.find(item => item.id === id);
        const previousVote = !!previousVoteObj ? previousVoteObj.votes : 0;

        const previousPercentegeObj = previousPercentege.find(
          item => item.id === id
        );

        const previousPercentegeValue = !!previousPercentegeObj
          ? previousPercentegeObj.percentage
          : 0;
        return (
          <div key={id}>
            <Card>
              <Candidate
                data={candidate}
                index={index + 1}
                previousVote={previousVote}
                previousPercentege={previousPercentegeValue}
              />
            </Card>
          </div>
        );
      })}
    </FlipMove>
  );
};

export default Candidates;
