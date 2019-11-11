import { GET_ERRORS, CLEAR_ERRORS, CLEAR_ERROR } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      state = action.payload;
      return action.payload;
    case CLEAR_ERROR:
      const field = action.field;
      return {
        ...state,
        [field]: ""
      };
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
