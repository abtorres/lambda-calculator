import React from "react";
import './Numbers.css';

const NumberButton = (props) => {
  if(props.number === '0') {
    return (
      <>
        {<button className='zero'>{props.number}</button>}
      </>
    );
  }else {
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container 
        on props */}
        {<button className='numbers'>{props.number}</button>}
      </>
    );
  }
};

export default NumberButton;