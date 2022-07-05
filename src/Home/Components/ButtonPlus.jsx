import React from "react";

import Plus from "../../common/components/Plus";

import './button_plus.scss';

const ButtonPlus = props => {
  const { onclick, classes } = props;

  return (
    <button
      type="button"
      className={`btn-plus ${classes}`}
      title="Adicionar"
      onClick={onclick}
      data-testid="add-button-test"
    >
      <Plus />
    </button>
  );
};

export default ButtonPlus;