import { ACTIONS as TOAST_ACTIONS } from "../actions/toastActions";

const initialState = {
  toastInfo: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOAST_ACTIONS.ADD_TOAST:
      return { ...state, toastInfo: action.payload };
    case TOAST_ACTIONS.REFRESH_TOAST:
      return { ...state, toastInfo: null };
    default:
      return state;
  }
};
