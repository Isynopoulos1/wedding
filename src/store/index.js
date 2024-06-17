import middlewares from "./middlewares";
import reducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";

const options = {
  // OPTIMIZE REDUX DEVTOOL DUE TO SIZE OF STATE
  maxAge: 20,
  trace: false,
  shouldRecordChanges: false,
};

const composeEnhancers = composeWithDevTools(options);
const isProd = process.env.NODE_ENV === "production";
export const store = isProd
  ? createStore(reducer(), middlewares)
  : createStore(reducer(), composeEnhancers(middlewares));
