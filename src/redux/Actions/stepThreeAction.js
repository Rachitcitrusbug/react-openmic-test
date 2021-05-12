import { STEP_THREE } from "../Types/stepThreeType";

export const stepThree = (data) => {
  return {
    type: STEP_THREE,
    payload: data,
  };
};
