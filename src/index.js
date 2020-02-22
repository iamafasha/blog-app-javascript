import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.scss";
const mount = document.querySelector("#app");
render(<App />, mount);
