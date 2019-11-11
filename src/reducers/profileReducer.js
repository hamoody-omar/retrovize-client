import { DRIVING_LICENSE } from "../actions/types";

const initialState = {
  drivingLicense: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DRIVING_LICENSE:
      return {
        ...state,
        drivingLicense: action.payload
      };
    default:
      return state;
  }
}
