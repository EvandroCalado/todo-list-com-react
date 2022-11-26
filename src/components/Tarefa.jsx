import React, { useState } from "react";

const Tarefa = (props) => {

  const [completado, setComppletado] = useState("")


  return (
    <li className={completado} key={props.indice}>
      {props.tarefa}
      <i
        className="fa-solid fa-square-check"
        onClick={() => setComppletado(completado === "" ? "completado" : "")}
      ></i>
      <i className="fa-solid fa-trash" onClick={() => props.deletarItem(props.indice)}></i>
    </li>
  );
};

export default Tarefa;
