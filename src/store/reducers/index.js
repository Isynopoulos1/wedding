import { combineReducers } from "redux";
import { localizeReducer } from "react-redux-translates";

const reducer = () => combineReducers({ localize: localizeReducer });

export default reducer;
