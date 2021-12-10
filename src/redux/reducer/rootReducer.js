import { combineReducers } from "redux";
// import {reducer as directionOfPalmAndFingerReducer} from "./directionOfPalmAndFingerReducer.js";
import { reducer as handDetectReducer } from "./handDetect.js";
import { reducer as caseReducer } from "./caseReducer.js";
import { reducer as toastReducer } from "./toastReducer.js";

const reducer = combineReducers({
  handDetect: handDetectReducer,
  case: caseReducer,
  toast: toastReducer,
});

export default reducer;
