import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

import Delete from "../../common/components/Delete";

import './button_delete.scss';

const ButtonDelete = props => {
  const { onclick, classes, isDisabled } = props;

  return (
    <button
      type="button"
      className={`btn-delete ${classes}`}
      title="Adicionar"
      onClick={onclick}
      disabled={isDisabled}
    >
      <Delete
        width="24px"
        height="24px"
      />
    </button>
  );
};

export default ButtonDelete;