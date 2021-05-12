import { combineReducers } from "redux";
import stepOneReducer from "./Reducers/stepOneReducer";
import stepTwoReducer from "./Reducers/stepTwoReducer";
import stepThreeReducer from "./Reducers/stepThreeReducer";
import stepFourReducer from "./Reducers/stepFourReducer";
import stepFiveReducer from "./Reducers/stepFiveReducer";
import stepSixReducer from "./Reducers/stepSixReducer";

const rootReducer = combineReducers({
  one: stepOneReducer,
  two: stepTwoReducer,
  three: stepThreeReducer,
  four: stepFourReducer,
  five: stepFiveReducer,
  six: stepSixReducer,
});

export default rootReducer;
