import { useState } from "react";

import Tarefa from "./components/Tarefa";

import "./App.css";

function App(props) {
  const [lista, setLista] = useState(["Tarefa1", "Tarefa2"]);
  const [novoItem, setNovoItem] = useState("");

  function adicionarNovoItem() {
    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index) {
    const tempArray = [...lista];
    tempArray.splice(index, 1);
    setLista(tempArray);
  }

  return (
    <>
      <input
        value={novoItem}
        type="text"
        onChange={(e) => setNovoItem(e.target.value)}
      ></input>
      <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      <ul>
        {lista.map((item, index) => {
          return <Tarefa key={index} tarefa={item} indice={index} deletarItem={deletarItem} />
        })}
      </ul>
    </>
  );
}

export default App;
