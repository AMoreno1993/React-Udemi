/* eslint-disable react/no-unescaped-entities */
import React from "react";
//Herramiento para randerizar react
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";

///Aquí podemos asignarle valor nuevo a `title` que pertenece al componente FirstApp
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10} />
  </React.StrictMode>
);
