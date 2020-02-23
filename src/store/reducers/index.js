import { combineReducers } from "redux";
import dogsReducer from "./dogReducer";
import formReducer from "./formReducer";
import dogViewReducer from "./dogViewReducer";

const rootReducer = combineReducers({
  dogs: dogsReducer,
  form: formReducer,
  dogView: dogViewReducer
});

export default rootReducer;
