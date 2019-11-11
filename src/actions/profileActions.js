import { GET_ERRORS, DRIVING_LICENSE, INCREMETNT_HOST_STEP } from "./types";
import axios from "axios";

// Save driving license info
export const saveDrivingLicense = (drivingLicenseData, next) => dispatch => {
  console.log("Get to action");
  axios
    .post("/api/profile/driving-license", drivingLicenseData)
    .then(res => {
      dispatch({
        type: DRIVING_LICENSE
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
