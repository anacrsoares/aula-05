import { useState } from "react";

export default function Contador() {
  const [lista, setLista] = useState([]);

  function incremento() {
    // setLista([...lista, 1]);
    setLista([...lista, Math.round(Math.random() * 100, 2)]);
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>{JSON.stringify(lista)}</p>
      <button onClick={incremento}>Incremento</button>
      {lista.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
