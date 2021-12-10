import { all, takeLatest } from "redux-saga/effects";
import { directionOfPalmAndFingerSaga } from "./directionOfPalmAndFingerSaga";
import { ACTIONS as DirectionOfPalmAndFingerActions } from "../actions/directionOfPalmAndFingerActions";
import { ACTIONS as DetectHandActions } from "../actions/detectHandActions";
import { ACTIONS as CaseActions } from "../actions/caseActions";

import { mainScreenSaga } from "./MainScreenSaga";
import { caseSaga } from "./caseSaga";

export function* rootSaga() {
  //   yield all([takeLatest(DirectionOfPalmAndFingerActions.FETCH_DATA_START,directionOfPalmAndFingerSaga.fetchData)]);
  yield all([
    takeLatest(
      DirectionOfPalmAndFingerActions.FETCH_DATA_START,
      mainScreenSaga.fetchAllData
    ),
    takeLatest(DetectHandActions.DETECT_HAND_START,mainScreenSaga.detectHand),
    takeLatest(CaseActions.FETCH_LIST_CASE_START,caseSaga.getAll)
  ]);
}
