/* import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './store'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
); */


// Comento el codigo para seguir con el cap D de la part 6
import ReactDOM from 'react-dom/client'
import App from './App'

import { CounterContextProvider } from './CounterContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <CounterContextProvider>
    <App />

  </CounterContextProvider>
)