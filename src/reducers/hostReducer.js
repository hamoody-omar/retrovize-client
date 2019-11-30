import {
  GET_CAR_SPECIFICATION,
  CAR_SPECIFICATION,
  CLEAR_CAR_SPECIFICATION,
  INCREMETNT_HOST_STEP,
  DECREMETNT_HOST_STEP
} from "../actions/types";

const initialState = {
  carSpecification: null,
  step: 8
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CAR_SPECIFICATION:
      return {
        ...state,
        carSpecification: action.payload
      };
    case CAR_SPECIFICATION:
      return {
        ...state,
        carSpecification: action.payload
      };
    case CLEAR_CAR_SPECIFICATION:
      return {
        ...state,
        carSpecification: null
      };
    case INCREMETNT_HOST_STEP:
      const nextStep = state.step + 1;
      return {
        ...state,
        step: nextStep
      };
    case DECREMETNT_HOST_STEP:
      const prevStep = state.step - 1;
      return {
        ...state,
        step: prevStep
      };
    default:
      return state;
  }
}
