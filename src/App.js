import { useState } from "react";

import Tarefa from "./components/Tarefa";
import Input from "./components/Input";
import Button from "./components/Button";

import "./App.css";

function App(props) {
  const [lista, setLista] = useState([]);
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
      <div className="input-contaier">
        <Input setNovoItem={setNovoItem} novoItem={novoItem} />
        <Button adicionarNovoItem={adicionarNovoItem} />
      </div>
      <ul className="tarefa">
        {lista.map((item, index) => {
          return (
            <Tarefa
              key={index}
              tarefa={item}
              indice={index}
              deletarItem={deletarItem}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
