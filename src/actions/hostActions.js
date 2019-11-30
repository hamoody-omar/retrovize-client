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
        type: "r",
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

// Save car price and availability
export const savePriceAvailability = (
  carPriceAvailability,
  next
) => dispatch => {
  axios
    .post("/api/host/car-price-availability", carPriceAvailability)
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

// Upload car photo
export const uploadCarPhoto = (carPhoto, next) => dispatch => {
  axios
    .post(
      "/api/host/upload-car-photo",
      carPhoto /*, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${carPhoto._boundary}`
      }
    }*/
    )
    .then(res => {
      /*dispatch({
        type: CAR_SPECIFICATION,
        payload: res.data
      });
      if (next === "nextStep") {
        dispatch({
          type: INCREMETNT_HOST_STEP
        });
      }*/
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const publishCar = (data, history) => dispatch => {
  axios
    .post("api/host/publish-car", data)
    .then(res => history.push("/view-listings"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
