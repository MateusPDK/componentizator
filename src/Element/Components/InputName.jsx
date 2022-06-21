import React from "react";

const InputName = ({ value, onchange }) => {
  return (
    <input
      type="text"
      className="element-name"
      value={value}
      onChange={onchange}
    />
  );
};

export default InputName;