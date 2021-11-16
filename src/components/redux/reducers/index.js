import { combineReducers } from "redux";
import MyDetailsReducer from "./myDetailsReducer";
import makesReducer from "./makesReducer";
import modelReducer from "./modelReducer";
import vehicleReducer from "./vehicleReducer";
const rootReducer = combineReducers({
  myDetails: MyDetailsReducer,
  makeList: makesReducer,
  modelList: modelReducer,
  vehicleList: vehicleReducer,
});

export default rootReducer;
