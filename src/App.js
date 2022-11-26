import { useState } from "react";
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

  function completarTarefa(index) {
    console.log(props);
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
        {lista.map((item, index) => (
          <li key={index} >
            {item}
            <i
              className="fa-solid fa-square-check"
              onClick={() => completarTarefa(index)}
            ></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => deletarItem(index)}
            ></i>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
