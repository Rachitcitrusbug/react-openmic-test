import { STEP_FOUR } from "../Types/stepFourType";

export const stepFour = (data) => {
  return {
    type: STEP_FOUR,
    payload: data,
  };
};
