import React from "react";
import './Numbers.css';

const NumberButton = (setDisplay) => {
  // console.log(setDisplay.setDisplay)
  if(setDisplay.number === '0') {
    return (
      <>
        {<button className='zero' onClick={setDisplay.setDisplay}>{setDisplay.number}</button>}
      </>
    );
  }else {
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container 
        on props */}
        {<button className='numbers' onClick={setDisplay.setDisplay}>{setDisplay.number}</button>}
      </>
    );
  }
};

export default NumberButton;