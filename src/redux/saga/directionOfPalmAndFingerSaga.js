import { all, call } from "redux-saga/effects";
import { fetchListDirectionOfPalmAndFinger } from "../../api/apiMap";
export const directionOfPalmAndFingerSaga = {
  *fetchData() {
    const response = yield call(() => fetchListDirectionOfPalmAndFinger());
    console.log(response);
  },
};
