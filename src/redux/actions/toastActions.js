export const ACTIONS = {
  ADD_TOAST: "ADD_TOAST",
  REFRESH_TOAST: "REFRESH_TOAST",
};

export const addToast = (content = "", type = "warning") => {
  return {
    type: ACTIONS.ADD_TOAST,
    payload:{
        content,
        type,
    }
  };
};
