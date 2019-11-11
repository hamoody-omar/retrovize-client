import {
  CLEAR_ERRORS,
  CLEAR_ERROR,
  CLEAR_CAR_SPECIFICATION,
  CLEAR_DRIVING_LICENSE,
  INCREMETNT_HOST_STEP,
  DECREMETNT_HOST_STEP
} from "./types";

export const clearError = field => {
  return {
    type: CLEAR_ERROR,
    field: field
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const clearCarSpecification = () => {
  return {
    type: CLEAR_CAR_SPECIFICATION
  };
};

export const clearDrivingLicense = () => {
  return {
    type: CLEAR_DRIVING_LICENSE
  };
};

export const incrementHostStep = () => {
  return {
    type: INCREMETNT_HOST_STEP
  };
};

export const decrementHostStep = () => {
  return {
    type: DECREMETNT_HOST_STEP
  };
};
