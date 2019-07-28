import React from "react";
import './Specials.css';

const SpecialButton = (props) => {
  console.log(props);
  const zeroDisplay = () => {
    props.setDisplayZero('0');
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button className='specials' onClick={zeroDisplay}>{props.props}</button>}
    </>
  );
};

export default SpecialButton;