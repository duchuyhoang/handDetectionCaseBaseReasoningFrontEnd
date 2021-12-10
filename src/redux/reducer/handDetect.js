import { ACTIONS } from "../actions/detectHandActions";

const initialState = {
  listDirectionOfPalmAndFinger: [],
  listFingerOpening: [],
  listFingerShape: [],
  listHandMovement: [],
  listHandShape: [],
  returnResult: null,
  loading: "idle",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_START:
      return { ...state, loading: "loading" };

    case ACTIONS.FETCH_DATA_SUCCESS:
      const {
        listDirectionOfPalmAndFinger = [],
        listFingerOpening = [],
        listFingerShape = [],
        listHandMovement = [],
        listHandShape = [],
      } = action.payload;
      console.log(listDirectionOfPalmAndFinger);
      return {
        ...state,
        loading: "fulfilled",
        listDirectionOfPalmAndFinger: listDirectionOfPalmAndFinger,
        listFingerOpening: listFingerOpening,
        listFingerShape: listFingerShape,
        listHandMovement: listHandMovement,
        listHandShape: listHandShape,
      };

    case ACTIONS.FETCH_DATA_FAIL:
      return { ...state, loading: "failed" };

    case ACTIONS.DETECT_HAND_SUCCESS:
      return {
        ...state,
        loading: "fulfilled",
        returnResult: action.payload.data,
      };

    case ACTIONS.CLEAR_DETECT_HAND_RESULT:
      return { ...state, loading: "fulfilled", returnResult: null };

    default:
      return state;
  }
};
