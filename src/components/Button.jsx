import React from "react";

const Button = (props) => {
  return (
    <i
      className="fa-solid fa-plus"
      onClick={() => props.adicionarNovoItem()}
    ></i>
  );
};

export default Button;
