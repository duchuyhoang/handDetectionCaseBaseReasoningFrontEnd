// import { createReducer } from "redux";
import { ACTIONS } from "../actions/directionOfPalmAndFingerActions";

const initialState = { listData: [], loading: "idle" };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case action.type === ACTIONS.FETCH_DATA_START:
      return { ...state, loading: "loading" };

    case action.type === ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, loading: "fulfilled", listData: action.payload };

    case action.type === ACTIONS.FETCH_DATA_FAIL:
      return { ...state, loading: "failed" };
      default:
        return state;
  }
};

