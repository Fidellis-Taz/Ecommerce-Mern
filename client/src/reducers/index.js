
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  //other reducers like product reducer
});

export default rootReducer;
