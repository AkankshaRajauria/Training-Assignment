import { combineReducers } from "redux";
import cartoonReducer from "./cartoonReducer";

const rootReducer = combineReducers({
  cartoon : cartoonReducer
})

export default rootReducer