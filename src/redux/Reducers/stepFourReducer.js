import { STEP_FOUR } from "../Types/stepFourType";

const initialState = {
  cost: "",
};

const stepFourReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_FOUR:
      return {
        ...state,
        cost: action.payload.cost,
      };
    default:
      return state;
  }
};

export default stepFourReducer;
