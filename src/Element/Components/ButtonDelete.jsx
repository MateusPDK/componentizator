import React from "react";

import Delete from "../../common/components/Delete";

import './button_delete.scss';

const ButtonDelete = props => {
  const { onclick, classes } = props;

  return (
    <button
      type="button"
      className={`btn-delete ${classes}`}
      title="Adicionar"
      onClick={onclick}
    >
      <Delete
        width="24px"
        height="24px"
      />
    </button>
  );
};

export default ButtonDelete;