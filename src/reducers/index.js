import { combineReducers } from "redux";

import repos from "./repos";
import inputForm from "./inputForm";
import issues from "./issues";

export default combineReducers({
    repos,
    inputForm,
    issues,
});
