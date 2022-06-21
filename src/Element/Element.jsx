import React from "react";

import ButtonDelete from "./Components/ButtonDelete";

import './element.scss';

const Element = () => {
  // TODO CODE HERE...

  return (
    <div className="element">
      <div className="container">
        <div className="flex align_center justify_between">
          <h2 className="subtitle">Element name</h2>
          
          <ButtonDelete />
        </div>

        <div className="element-fields">
          <textarea type="text" className="element-field"></textarea>
          
          <textarea type="text" className="element-field"></textarea>

          <div className="preview element-field"></div>
        </div>
      </div>
    </div>
  );
};

export default Element;