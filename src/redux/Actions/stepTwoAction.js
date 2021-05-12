import { STEP_TWO } from "../Types/stepTwoType";

export const stepTwo = (data) => {
  return {
    type: STEP_TWO,
    payload: data,
  };
};
