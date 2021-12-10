import { all, call, put } from "redux-saga/effects";
import {
  fetchListDirectionOfPalmAndFinger,
  fetchListFingerOpening,
  fetchListFingerShape,
  fetchListHandMovement,
  fetchListHandShape,
  detectHand,
} from "../../api/apiMap";
import { ACTIONS as MAIN_SCREEN_ACTIONS } from "../actions/detectHandActions";
export const mainScreenSaga = {
  *fetchAllData(action) {
    try {
      const [
        listDirectionOfPalmAndFinger,
        listFingerOpening,
        listFingerShape,
        listHandMovement,
        listHandShape,
      ] = yield all([
        call(() => fetchListDirectionOfPalmAndFinger()),
        call(() => fetchListFingerOpening()),
        call(() => fetchListFingerShape()),
        call(() => fetchListHandMovement()),
        call(() => fetchListHandShape()),
      ]);
      yield put({
        type: MAIN_SCREEN_ACTIONS.FETCH_DATA_SUCCESS,
        payload: {
          listDirectionOfPalmAndFinger: listDirectionOfPalmAndFinger.data.data,
          listFingerOpening: listFingerOpening.data.data,
          listFingerShape: listFingerShape.data.data,
          listHandMovement: listHandMovement.data.data,
          listHandShape: listHandShape.data.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  },
  *detectHand(action) {
    try {
      const {data}=action;
      const response=yield call(()=>detectHand({data}));
      console.log(response);

      yield put({
        type: MAIN_SCREEN_ACTIONS.DETECT_HAND_SUCCESS,
        payload: {
          data:response.data ? {...response.data} : null
        },
      });


    } catch (e) {}
  },
};
