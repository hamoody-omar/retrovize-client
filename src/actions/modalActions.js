import {
  SHOW_LOGIN_MODAL,
  SHOW_SIGNUP_MODAL1,
  SHOW_SIGNUP_MODAL2,
  CLOSE_LOGIN_MODAL,
  CLOSE_SIGNUP_MODAL1,
  CLOSE_SIGNUP_MODAL2
} from "../actions/types";

export const setShowLoginModal = () => {
  return {
    type: SHOW_LOGIN_MODAL
  };
};

export const setShowSignupModal1 = () => {
  return {
    type: SHOW_SIGNUP_MODAL1
  };
};

export const setShowSignupModal2 = () => {
  return {
    type: SHOW_SIGNUP_MODAL2
  };
};

export const setCloseLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL
  };
};

export const setCloseSignupModal1 = () => {
  return {
    type: CLOSE_SIGNUP_MODAL1
  };
};

export const setCloseSignupModal2 = () => {
  return {
    type: CLOSE_SIGNUP_MODAL2
  };
};
