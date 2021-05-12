import { STEP_FIVE } from "../Types/stepFiveType";

const initialState = {
  image: "",
  description: "",
};

const stepFiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_FIVE:
      return {
        ...state,
        image: action.payload.image,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export default stepFiveReducer;
