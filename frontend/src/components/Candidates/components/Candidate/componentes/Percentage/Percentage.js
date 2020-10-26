import React from 'react';
import CountUp from 'react-countup';

const Percentage = ({ value, previousValue }) => {
  console.log(`${previousValue} < ${value}`);

  return (
    <div>
      <CountUp
        start={previousValue}
        end={value}
        duration={0.6}
        separator="."
        decima=","
        suffix=" %"
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Percentage;
