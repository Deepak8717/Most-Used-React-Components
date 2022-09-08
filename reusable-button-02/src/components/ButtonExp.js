import Button from "./button/button";

import React from "react";

const ButtonExp = () => {
  const insertClickHandler = (e) => {
    alert("Clicked on insert Button");
  };
  const saveClickHandler = (e) => {
    alert("Clicked on save Button");
  };
  return (
    <div>
      <h3>Button reusable component example</h3>
      <Button
        id={"btnInsert"}
        type={"Submit"}
        value={"Insert"}
        isDisabled={true}
        clickHandler={insertClickHandler}
      />
      <Button
        id={"btnSave"}
        type={"Submit"}
        value={"Save"}
        isDisabled={false}
        clickHandler={saveClickHandler}
      />
    </div>
  );
};

export default ButtonExp;
