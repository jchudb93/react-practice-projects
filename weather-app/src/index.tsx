import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./scenes/home/scenes/App";
import "./scenes/home/styles/App.css";
import reducer from "./services/weather/reducers/reducer";

import registerServiceWorker from "./registerServiceWorker";

import { applyMiddleware, createStore } from "redux";

import { promiseMiddleware } from "redux-promise";

import { Provider } from "react-redux";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
