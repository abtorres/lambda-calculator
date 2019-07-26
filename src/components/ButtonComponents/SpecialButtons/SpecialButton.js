import React from "react";
import './Specials.css';

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button className='specials'>{props.props}</button>}
    </>
  );
};

export default SpecialButton;