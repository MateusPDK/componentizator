import React from "react";

const InputName = ({ id, value, onchange }) => {
  return (
    <input
      type="text"
      className="element-name"
      value={value}
      onChange={onchange}
      data-testid={`input-name-test-${id}`}
    />
  );
};

export default InputName;