import { GET_ERRORS, GET_LISTINGS } from "./types";
import axios from "axios";

export const getListings = data => dispatch => {
  axios
    .post("api/listings/car-listings", data)
    .then(res =>
      dispatch({
        type: GET_LISTINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
