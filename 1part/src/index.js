// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const WarningNotUsed = () => {
//   return <h1>Todavia no se ha usado el contador</h1>;
// };

// const ListOfClicks = ({ clicks }) => {
//   console.log({ clicks });
//   // debugger;
//   return <p>{clicks.join(", ")}</p>;
// };

// const App = () => {
//   /* const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0); */

//   const [counters, setCounters] = useState({
//     left: 0,
//     right: 0,
//     mensaje: "Mensaje en el estado",
//   });

//   const [clicks, setclicks] = useState([]);

//   const handleClickLeft = () => {
//     const newCounterState = {
//       ...counters,
//       left: counters.left + 1,
//     };
//     setCounters(newCounterState);
//     setclicks((prevClicks) => {
//       return [...prevClicks, "L"];
//     });
//   };

//   const handleClickRight = () => {
//     setCounters({
//       ...counters,
//       right: counters.right + 1,
//     });
//     setclicks((prevClicks) => {
//       return [...prevClicks, "R"];
//     });
//   };

//   const handleReset = () => {
//     setCounters({
//       left: 0,
//       right: 0,
//       mensaje: "Mensaje en el estado",
//     });
//     setclicks([]);
//   };

//   return (
//     <div>
//       {counters.left}
//       <button onClick={handleClickLeft}>left</button>
//       <button onClick={handleClickRight}>right</button>
//       {counters.right}
//       <p>
//         <button onClickCapture={handleReset}>Reset</button>
//       </p>
//       <p>Clicks totales: {clicks.length}</p>
//       {clicks.length === 0 ? (
//         <WarningNotUsed />
//       ) : (
//         <ListOfClicks clicks={clicks} />
//       )}
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
<App />

)