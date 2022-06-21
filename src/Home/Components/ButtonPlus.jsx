import React from "react";

import Plus from "../../common/components/Plus";

import './button_plus.scss';

const ButtonPlus = ({ classes }) => {
  // TODO CODE HERE...

  return (
    <button
      type="button"
      className={`btn-plus ${classes}`}
      title="Adicionar"
    >
      <Plus />
    </button>
  );
};

export default ButtonPlus;