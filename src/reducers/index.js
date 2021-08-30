import { combineReducers } from "redux";

import repos from "./repos";
import inputForm from "./inputForm";

export default combineReducers({
    repos,
    inputForm,
});
