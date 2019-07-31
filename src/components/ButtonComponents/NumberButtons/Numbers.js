import React, { useState } from "react";
//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import numbers from '../../../data';
const Numbers = (setDisplay) => {
  // console.log(setDisplay.setDisplay)
  // STEP 2 - add the imported data to state
  const [numberButtons] = useState(numbers.numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberButtons.map(number => <NumberButton number={number} key={number} setDisplay={setDisplay.setDisplay}/>)
       }
    </div>
  );
};

export default Numbers;