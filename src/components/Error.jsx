function ErrorInput({ text }) {
  return <p className="Error-input">لطفا {text}خود را به درستی وارد کنید </p>;
}
ErrorInput.defaultProps = {
  text: "Guest",
};
export default ErrorInput;
