import React from "react";
import ReactDom from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App.js";

injectTapEventPlugin();
ReactDom.render(<App />, document.getElementById('main'));

