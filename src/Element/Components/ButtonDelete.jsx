import React from "react";

import Delete from "../../common/components/Delete";

import './button_delete.scss';

const ButtonDelete = props => {
  const { id, onclick, classes, isDisabled } = props;

  return (
    <button
      id={`delete-button-test-${id}`}
      type="button"
      className={`btn-delete ${classes}`}
      title="Adicionar"
      onClick={onclick}
      disabled={isDisabled}
      data-testid={`delete-button-test-${id}`}
    >
      <Delete
        width="24px"
        height="24px"
      />
    </button>
  );
};

export default ButtonDelete;