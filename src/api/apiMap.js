import { get, post, postMultipart } from "./axios";

const fetchListDirectionOfPalmAndFinger = (payload) => {
  return get("/expertiseData/getAllDirectionOfPalmsAndFinger", { ...payload });
};
const fetchListFingerOpening = (payload) => {
  return get("/expertiseData/getAllFingerOpening", { ...payload });
};
const fetchListFingerShape = (payload) => {
  return get("/expertiseData/getAllFingerShape", { ...payload });
};
const fetchListHandMovement = (payload) => {
  return get("/expertiseData/getAllHandMovement", { ...payload });
};
const fetchListHandShape = (payload) => {
  return get("/expertiseData/getAllHandShape", { ...payload });
};

const detectHand = (payload) => {
  return post("/handDetect/detect", { ...payload });
};
const getAllCase = (payload) => {
  return get("/case/getAll", { ...payload });
};

export {
  fetchListDirectionOfPalmAndFinger,
  fetchListFingerOpening,
  fetchListFingerShape,
  fetchListHandMovement,
  fetchListHandShape,
  detectHand,
  getAllCase
};
