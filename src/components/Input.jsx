import React from "react";

const Input = (props) => {
  return (
    <input
      placeholder="Digite uma tarefa..."
      className="input"
      value={props.novoItem}
      type="text"
      onChange={(e) => props.setNovoItem(e.target.value)}
    ></input>
  );
};

export default Input;
