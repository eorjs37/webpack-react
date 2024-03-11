import React from "react";
import { ReactDOM } from "react";

const app = React.createElement("div", { className: "app" }, "TEST");

const rootNode = document.getElementById("root");
ReactDOM.render(app, rootNode);
