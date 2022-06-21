import React from "react";

const InputCode = ({ value, onchange }) => {
  return (
    <textarea
      type="text"
      className="element-field"
      value={value}
      onChange={onchange}
    ></textarea>
  );
};

export default InputCode;