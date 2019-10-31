import {
  SHOW_LOGIN_MODAL,
  SHOW_SIGNUP_MODAL1,
  SHOW_SIGNUP_MODAL2,
  CLOSE_LOGIN_MODAL,
  CLOSE_SIGNUP_MODAL1,
  CLOSE_SIGNUP_MODAL2
} from "../actions/types";

const initialState = {
  showLoginModal: false,
  showSingupModal1: false,
  showSingupModal2: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return { ...state, showLoginModal: true };
    case SHOW_SIGNUP_MODAL1:
      return {
        ...state,
        showSingupModal1: true
      };
    case SHOW_SIGNUP_MODAL2:
      return {
        ...state,
        showSingupModal2: true
      };
    case CLOSE_LOGIN_MODAL:
      return { ...state, showLoginModal: false };
    case CLOSE_SIGNUP_MODAL1:
      return {
        ...state,
        showSingupModal1: false
      };
    case CLOSE_SIGNUP_MODAL2:
      return {
        ...state,
        showSingupModal2: false
      };

    default:
      return state;
  }
}
