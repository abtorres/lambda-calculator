import React from "react";
import './Operators.css';

const OperatorButton = (props) => {
  // console.log(props.props)

  const handleAddToEquation = () => {
    props.setDisplay(props.props.value);
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container 
      on props */}
      {<button className='operators' onClick={handleAddToEquation}>{props.props.char}</button>}
    </>
  );
};

export default OperatorButton;