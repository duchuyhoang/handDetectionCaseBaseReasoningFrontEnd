import "./DetectHand.css";
import { useDispatch, useSelector } from "react-redux";
// import { ACTIONS } from "../../redux/actions/directionOfPalmAndFingerActions";
import { ACTIONS } from "../../../redux/actions/detectHandActions";
import Select from "react-select";
import { useEffect, useLayoutEffect, useState } from "react";
import { Loading } from "../../../shared/component/Loading/Loading";
import Modal from "../../../shared/component/Modal/Modal";
import { SVGIcon } from "../../../shared/component/SvgIcon";

const customStyle = {
  indicatorSeparator: (provided, state) => {
    return {
      display: "none!important",
    };
  },
};

function DetectHand() {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const [
    selectedDirectionOfPalmAndFinger,
    setSelectedDirectionOfPalmAndFinger,
  ] = useState(null);

  const handleCloseModal = () => {
    setIsShowModal(false);
    dispatch({ type: ACTIONS.CLEAR_DETECT_HAND_RESULT });
  };
  // const [returnCharacter, setReturnCharacter] = useState("");

  const [selectedFingerOpening, setSelectedFingerOpening] = useState(null);
  const [selectedFingerShape, setSelectedFingerShape] = useState(null);
  const [selectedHandMovement, setSelectedHandMovement] = useState(null);
  const [selectedHandShape, setSelectedHandShape] = useState(null);
  const [errorNotSelectAll, setErrorNotSelectAll] = useState(false);

  const listDirectionOfPalmAndFinger = useSelector(
    (state) => state.handDetect.listDirectionOfPalmAndFinger
  );
  const listFingerOpening = useSelector(
    (state) => state.handDetect.listFingerOpening
  );
  const listFingerShape = useSelector(
    (state) => state.handDetect.listFingerShape
  );
  const listHandMovement = useSelector(
    (state) => state.handDetect.listHandMovement
  );
  const listHandShape = useSelector((state) => state.handDetect.listHandShape);
  const loadingState = useSelector((state) => state.handDetect.loading);
  const returnResult = useSelector((state) => state.handDetect.returnResult);
  useLayoutEffect(() => {
    if (returnResult) setIsShowModal(true);
    return () => {};
  }, [returnResult]);
  useEffect(() => {
    dispatch({
      type: ACTIONS.FETCH_DATA_START,
      payload: { message: "Hello world" },
    });
  }, []);

  if (loadingState === "idle" || loadingState === "loading") return <Loading />;

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="selectContainer">
            <span>Hình dạng bàn tay</span>
            <Select
              styles={customStyle}
              options={listHandShape.map((_value) => ({
                value: _value.idHandShape,
                label: _value.nameHandShape,
              }))}
              value={selectedHandShape}
              onChange={(v) => {
                setSelectedHandShape(v);
              }}
            />
          </div>

          <div className="selectContainer">
            <span>Hướng của lòng bàn tay và ngón tay</span>
            <Select
              styles={customStyle}
              options={listDirectionOfPalmAndFinger.map((_value) => ({
                value: _value.idDirectionOfPalmsAndFinger,
                label: _value.directionOfPalmAndFingerName,
              }))}
              value={selectedDirectionOfPalmAndFinger}
              onChange={(v) => {
                setSelectedDirectionOfPalmAndFinger(v);
                console.log(v);
              }}
            />
          </div>
          <div className="selectContainer">
            <span>Độ mở các ngón tay</span>
            <Select
              styles={customStyle}
              options={listFingerOpening.map((_value) => ({
                value: _value.idFingerOpening,
                label: _value.nameFingerOpening,
              }))}
              value={selectedFingerOpening}
              onChange={(v) => {
                setSelectedFingerOpening(v);
              }}
            />
          </div>

          <div className="selectContainer">
            <span>Hình dạng ngón tay</span>
            <Select
              styles={customStyle}
              options={listFingerShape.map((_value) => ({
                value: _value.idFingerShape,
                label: _value.nameFingerShape,
              }))}
              value={selectedFingerShape}
              onChange={(v) => {
                setSelectedFingerShape(v);
              }}
            />
          </div>

          <div className="selectContainer">
            <span>Độ dịch chuyển của tay</span>
            <Select
              styles={customStyle}
              options={listHandMovement.map((_value) => ({
                value: _value.idHandMovement,
                label: _value.nameHandMovement,
              }))}
              value={selectedHandMovement}
              onChange={(v) => {
                setSelectedHandMovement(v);
              }}
            />
          </div>
          {errorNotSelectAll ? (
            <div className="error_message">Error</div>
          ) : (
            <></>
          )}

          <button
            className="submitBtn"
            onClick={() => {
              // if (
              //   !selectedDirectionOfPalmAndFinger ||
              //   !selectedFingerOpening ||
              //   !selectedFingerShape ||
              //   !selectedHandMovement ||
              //   !selectedHandShape
              // ) {
              //   setErrorNotSelectAll(true);
              // } else {
              dispatch({
                type: ACTIONS.DETECT_HAND_START,
                data: {
                  directionOfPalmAndFinger:
                    selectedDirectionOfPalmAndFinger.value,
                  fingerOpening: selectedFingerOpening.value,
                  fingerShape: selectedFingerShape.value,
                  handMovement: selectedHandMovement.value,
                  handShape: selectedHandShape.value,
                  // directionOfPalmAndFinger: 1,
                  // fingerOpening: 11,
                  // fingerShape: 10,
                  // handMovement: 3,
                  // handShape: 1,
                },
              });
              setErrorNotSelectAll(false);
              // }
            }}
          >
            Check
          </button>
        </div>
      </div>
      <Modal
        isShow={isShowModal}
        setIsShow={setIsShowModal}
        onClose={handleCloseModal}
      >
        <div className="modalContainer">
          <div style={{ textAlign: "right" }}>
            <SVGIcon
              name="close"
              width={18}
              width={18}
              onClick={handleCloseModal}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="modal-header">
            <h2 className="header">Chữ cái bạn mô tả là</h2>
            <div className="closeBtn" onClick={handleCloseModal}></div>
          </div>
          <div className="modal-content">
            <h1>
              <span style={{ fontWeight: "unset" }}>Chữ </span>
              <strong className="result">
                {returnResult?.case?.case?.caseNameResult ||
                  returnResult?.case?.caseNameResult}
              </strong>
            </h1>
            <p style={{marginTop:5}}>{returnResult?.message}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DetectHand;
