import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import 'normalize.css';
 
import App from "./App";
import { StoreProvider } from './store/index';
 
ReactDom.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);