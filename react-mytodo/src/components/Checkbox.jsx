import React from "react";
import PropTypes from "prop-types";
function Checkbox({ text, isChecked }) {
  let ResultCheckbox = "";
  if (isChecked) {
    ResultCheckbox = <div>{text} is done</div>;
  } else {
    ResultCheckbox = <div>{text} is in progess</div>;
  }
  return <>
  {ResultCheckbox}
  
  
  
  
  </>;
}



Checkbox.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default Checkbox;
