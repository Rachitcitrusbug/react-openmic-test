import { STEP_ONE } from "../Types/stepOneType";

export const stepOne = (data) => {
  return {
    type: STEP_ONE,
    payload: data,
  };
};
