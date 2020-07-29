import React from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Controller />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
