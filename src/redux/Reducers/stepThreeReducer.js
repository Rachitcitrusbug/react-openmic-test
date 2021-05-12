import { STEP_THREE } from "../Types/stepThreeType";

const initialState = {
  openToAll: "",
  description: "",
};

const stepThreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_THREE:
      return {
        ...state,
        openToAll: action.payload.openToAll,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export default stepThreeReducer;
