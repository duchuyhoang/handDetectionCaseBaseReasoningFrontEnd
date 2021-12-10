import { ACTIONS as CASE_ACTIONS } from "../actions/caseActions";

const initialState = {
  listCase: [],
  loading: "idle",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CASE_ACTIONS.FETCH_LIST_CASE_START:
      return { ...state, loading: "loading" };

    case CASE_ACTIONS.FETCH_LIST_CASE_SUCCESS:
      return { ...state, loading: "fulfilled",listCase:action.payload.data };

    case CASE_ACTIONS.FETCH_LIST_CASE_FAIL:
      return { ...state, loading: "failed" };
    default:
      return state;
  }
};
