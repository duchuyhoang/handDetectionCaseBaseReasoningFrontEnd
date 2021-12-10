import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
export default function Modal({ children, isShow, setIsShow,onClose }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isShow) {
        backdropRef.current.addEventListener("click", function (e) {
        console.log(e.target);
        if (!modalRef.current.contains(e.target)) {
          if (setIsShow) {
            setIsShow(false);
          }
          if(onClose){
            onClose();
          }
        }
      });
    }

    document.body.style.overflow = `${!isShow ? "auto" : "hidden"}`;
    return ()=>{
        if(backdropRef.current)
        backdropRef.current.removeEventListener("click",()=>{})
    }
  }, [isShow]);

  return ReactDOM.createPortal(
    <div className={`backdrop ${isShow ? "backdrop" : "backdropHide"}`} ref={backdropRef}>
      <div
        ref={modalRef}
        className={`modal ${isShow ? "modal-show" : "modal-hide"}`}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
