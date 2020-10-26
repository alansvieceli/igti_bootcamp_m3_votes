import React from 'react';
import CountUp from 'react-countup';

const Votes = ({ value, previousValue }) => {
  return (
    <div>
      <CountUp start={previousValue} end={value} duration={0.6} separator=".">
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Votes;
