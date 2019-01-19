import { combineReducers } from "redux";

import form from "./formReducer";
import page from "./pageReducer";
import about from "./aboutReducer";

export default combineReducers({ form, page, about });
