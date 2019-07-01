import { combineReducers } from "redux";
import commonReducer from "../features/common/common.reducer";

const rootReducer = combineReducers({
  common: commonReducer
});

export default rootReducer;
