import { STEP_SIX } from "../Types/stepSixType";

export const stepSix = (data) => {
  return {
    type: STEP_SIX,
    payload: data,
  };
};
