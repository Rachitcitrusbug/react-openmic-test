import { STEP_ONE } from "../Types/stepOneType";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  cellNumber: "",
  password: "",
  confirmPassword: "",
  venue: "",
  aboutShow: "",
};

const stepOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_ONE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        cellNumber: action.payload.cellNumber,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        venue: action.payload.venue,
        aboutShow: action.payload.aboutShow,
      };
    default:
      return state;
  }
};

export default stepOneReducer;
