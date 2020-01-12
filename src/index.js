import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { InfoProvider } from "./context/Info";

ReactDOM.render(
  <InfoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InfoProvider>,
  document.getElementById("root")
);
