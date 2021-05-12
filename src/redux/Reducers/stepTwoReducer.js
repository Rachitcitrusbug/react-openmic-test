import { STEP_TWO } from "../Types/stepTwoType";

const initialState = {
  scheduleDateTime: "",
};

const stepTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_TWO:
      return {
        ...state,
        scheduleDateTime: action.payload.scheduleDateTime,
      };
    default:
      return state;
  }
};

export default stepTwoReducer;
