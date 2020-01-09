import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { InfoProvider } from "./context/Info";

ReactDOM.render(
  <InfoProvider>
    <App />
  </InfoProvider>,
  document.getElementById("root")
);
