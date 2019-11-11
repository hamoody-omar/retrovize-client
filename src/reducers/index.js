import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import modalReducer from "./modalReducer";
import hostReducer from "./hostReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  modal: modalReducer,
  host: hostReducer
});
