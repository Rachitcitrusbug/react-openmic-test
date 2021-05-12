import { STEP_SIX } from "../Types/stepSixType";

const initialState = {
  scheduleDateTime: "",
};

const stepSixReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_SIX:
      return {
        ...state,
        scheduleDateTime: action.payload.scheduleDateTime,
      };
    default:
      return state;
  }
};

export default stepSixReducer;
