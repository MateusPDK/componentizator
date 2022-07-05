import React, { useEffect } from "react";

import { v4 as uuidv4 } from 'uuid';

import InputName from "./components/InputName";
import InputCode from "./components/InputCode";
import Preview from "./components/Preview";
import ButtonDelete from "./components/ButtonDelete";

import './element.scss';

const Element = props => {
  const { onRemoveElementHandler, onUpdateElementHandler } = props;
  const { id, name, html, css } = props.element || { id: "", name: "", html: "", css: "" };

  const initializeElementProps = () => {
    if (!id || id === "") {
      onChangeFieldHandler("id", uuidv4());
    }

    if (!name || name === "") {
      onChangeFieldHandler("name", `Elemento ${props.index}`);
    }
  };

  useEffect(() => {
    initializeElementProps();
  });

  const onChangeFieldHandler = (name, value) => {
    if(!onUpdateElementHandler) {
      return;
    }

    const updatedElement = {
      ...props.element,
      [name]: value,
    };

    onUpdateElementHandler(updatedElement);
  };

  return (
    <div className="element" data-testid={`element-test-${id}`}>
      <div className="container">
        <div className="flex align_center justify_between">
          <InputName
            value={name}
            onchange={(e) => onChangeFieldHandler && onChangeFieldHandler("name", e.target.value)}
          />

          <ButtonDelete
            onclick={() => onRemoveElementHandler && onRemoveElementHandler(id)}
            isDisabled={!onRemoveElementHandler}
          />
        </div>

        <div className="element-fields">
          <InputCode
            value={html}
            onchange={(e) => onChangeFieldHandler && onChangeFieldHandler("html", e.target.value)}
          />
          
          <InputCode
            value={css}
            onchange={(e) => onChangeFieldHandler && onChangeFieldHandler("css", e.target.value)}
          />

          <Preview
            id={id}
            html={html}
            css={css}
          />
        </div>
      </div>
    </div>
  );
};

export default Element;