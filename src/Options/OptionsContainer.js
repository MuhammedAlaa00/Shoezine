import React from 'react'
import Next from './Next';
import Previous from './Previous';

function OptionsContainer({ pagenextNumb, setpagenextNumb }) {
  return (
    <div className="center">
      <Previous setpagenextNumb={setpagenextNumb} pagenextNumb={pagenextNumb} />
      <Next setpagenextNumb={setpagenextNumb} pagenextNumb={pagenextNumb} />
    </div>
  );
}

export default OptionsContainer