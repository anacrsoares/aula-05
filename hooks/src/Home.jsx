import { useState } from "react"; // STATE => É UMA VARIÁVEL ESPECIAL DO REACT

export default function Home() {
  const [numero, setNumero] = useState(0); // a convenção é que ele fique logo após ao meu componente
  //   let numero = 0;

  function incrementar() {
    //   numero += 1;
    setNumero(numero + 1); // função assíncrona
    console.log(numero);
  }

  function decrementar() {
    setNumero(numero - 1);
    console.log(numero);
  }

  function zerar() {
    setNumero(numero - numero);
    console.log(numero);
  }

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementar}>Incremento</button>
      <button onClick={decrementar}>Decremento</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}
