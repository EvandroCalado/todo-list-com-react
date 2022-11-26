import React, { useState } from "react";

const Tarefa = (props) => {
  const [completado, setComppletado] = useState("");

  return (
    <li key={props.indice}>
      <p className={completado}>{props.tarefa}</p>
      <div className="tarefa-icones">
        <i
          className="fa-solid fa-square-check"
          onClick={() => setComppletado(completado === "" ? "completado" : "")}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => props.deletarItem(props.indice)}
        ></i>
      </div>
    </li>
  );
};

export default Tarefa;
