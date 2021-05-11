import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import stepOneReducer from "./Reducers/stepOneReducer";

const logger = createLogger();
const store = createStore(stepOneReducer, applyMiddleware(logger));

export default store;
