import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

// TRANSLATION IMPORTS
import { LocalizeProvider } from "react-redux-translates";
import { initialize } from "@utils";
// REDUX IMPORTS
import { Provider } from "react-redux";
import { store } from "./store";

// COMPONENTS
import App from "./components/App.jsx";

const rootElement = document.getElementById("root");
const appRender = (
  <Provider store={store}>
    <LocalizeProvider store={store} initialize={initialize()}>
      <App />
    </LocalizeProvider>
  </Provider>
);

const root = createRoot(rootElement);
root.render(appRender);
