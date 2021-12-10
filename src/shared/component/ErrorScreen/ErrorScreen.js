export const ErrorScreen = ({ message }) => {
  return (
    <div className="errorScreenContainer">
      <h2 className="errorMessage">{message || "Something wrong"}</h2>
    </div>
  );
};
