import React from "react";

const Button = (props) => {
  const btnEnableDisplay = props.isDisplayed ? "btn-disable" : "btn-enable";
  return (
    <button
      id={props.id}
      className={`btn ${btnEnableDisplay}`}
      onClick={props.clickHandler}
      types={props.types}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
