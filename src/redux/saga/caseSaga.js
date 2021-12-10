import { call, put } from "redux-saga/effects";
import { getAllCase } from "../../api/apiMap";
import { ACTIONS as CASE_ACTIONS } from "../actions/caseActions";
import { addToast } from "../actions/toastActions";
export const caseSaga = {
  *getAll() {
    try {
      const response = yield call(() => getAllCase({}));
      yield put({
        type: CASE_ACTIONS.FETCH_LIST_CASE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      // console.log();
      yield put({
        type: CASE_ACTIONS.FETCH_LIST_CASE_FAIL,
      });
      yield put(addToast("Something wrong", "error"));
    }
  },
};
