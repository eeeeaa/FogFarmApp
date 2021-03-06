import React from "react";
import ReactDOM from "react-dom";
import "./css_sheet/index.css";
import "./css_sheet/bootstrap.min.css";
import Main from "./MainLayout/Main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
