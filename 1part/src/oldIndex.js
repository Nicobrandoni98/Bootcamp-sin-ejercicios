/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();

-----------------------------------
 */

import React, { useState } from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = ({number}) => {
    return <h1>{number}</h1>
}

const App2 = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleClickReset = () => {
    setContador(0);
  };

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? 'Es par' : 'Es impar';

  return (
    <div>
      <p>El valor del contador es: </p>
      <Counter number={contador}/>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button
        onClick={() => {
          setContador((prevContador) => {
            return prevContador - 1;
          });
        }}
      >
        Restar
      </button>
      <button onClick={handleClickReset}>Reiniciar</button>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);