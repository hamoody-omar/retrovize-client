import {
  GET_ERRORS,
  GET_CAR_SPECIFICATION,
  CAR_SPECIFICATION,
  INCREMETNT_HOST_STEP
} from "./types";
import axios from "axios";

// Save car specification
export const saveCarSpecification = (carData, next) => dispatch => {
  axios
    .post("/api/host/car-specification", carData)
    .then(res => {
      dispatch({
        type: CAR_SPECIFICATION,
        payload: res.data
      });
      if (next === "nextStep") {
        dispatch({
          type: INCREMETNT_HOST_STEP
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get car specification
export const getCarSpecification = (carVIN, next) => dispatch => {
  axios
    .post("/api/host/get-car-specification", carVIN)
    .then(res => {
      dispatch({
        type: GET_CAR_SPECIFICATION,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Save car specification
export const saveCarRegistration = (carData, next) => dispatch => {
  axios
    .post("/api/host/car-registration", carData)
    .then(res => {
      /*dispatch({
        type: CAR_SPECIFICATION,
        payload: res.data
      });*/

      if (next === "nextStep") {
        dispatch({
          type: INCREMETNT_HOST_STEP
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Save car location
export const saveCarLocation = (LocationData, next) => dispatch => {
  axios
    .post("/api/host/car-location", LocationData)
    .then(res => {
      /*dispatch({
        type: CAR_SPECIFICATION,
        payload: res.data
      });*/
      if (next === "nextStep") {
        dispatch({
          type: INCREMETNT_HOST_STEP
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Save car description and featuers
export const saveCarDesFtr = (carDesFtr, next) => dispatch => {
  axios
    .post("/api/host/car-description-features", carDesFtr)
    .then(res => {
      /*dispatch({
        type: CAR_SPECIFICATION,
        payload: res.data
      });*/
      if (next === "nextStep") {
        dispatch({
          type: INCREMETNT_HOST_STEP
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
