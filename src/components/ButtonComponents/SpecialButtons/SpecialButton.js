import React from "react";
import './Specials.css';

const SpecialButton = (props) => {
  // console.log(props);
  // console.log(props.props)
  const zeroDisplay = () => {
    props.setDisplayZero('0');
  };

  const handleSetDisplay = () => {
    props.setDisplay(props.props);
  };

  if(props.props === 'C') {
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        {<button className='specials' onClick={zeroDisplay}>{props.props}</button>}
      </>
    );
  }else {
    return (
      <>
        {<button className='specials' onClick={handleSetDisplay}>{props.props}</button>}
      </>
    )
  }
};

export default SpecialButton;