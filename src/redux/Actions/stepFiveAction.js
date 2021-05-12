import { STEP_FIVE } from "../Types/stepFiveType";

export const stepFive = (data) => {
  return {
    type: STEP_FIVE,
    payload: data,
  };
};
