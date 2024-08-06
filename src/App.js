import { useState } from "react";
import "./App.css";
import ErrorInput from "./components/Error";

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordilInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [clicked, setClicked] = useState(false);

  function clickHandler(e) {
    e.preventDefault();
    setClicked(true);
    if (emailInput.length > 6 && passwordInput.length > 8) {
      const newUser = {
        email: emailInput,
        password: passwordInput,
      };
      console.log(JSON.stringify(newUser));

      setTimeout(() => {
        setPasswordilInput("");
        setEmailInput("");
        setClicked(false);
      }, 50);
    }
  }
  return (
    <div className="container">
      <h2>ورود به سایت</h2>
      <div className="form">
        <div className="Box">
          <input
            className="input"
            type="email"
            placeholder="ایمیل"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          {emailInput?.length < 6 && clicked && <ErrorInput text=" " />}
        </div>
        <div className="Box">
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            value={passwordInput}
            onChange={(e) => setPasswordilInput(e.target.value)}
          />
          <span
            className="showPassword"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? "👁️" : "🫣"}
          </span>

          {passwordInput?.length < 8 && clicked && (
            <ErrorInput text="رمز عبور " />
          )}
        </div>
        <div className="button-box">
          <button
            type="submit"
            className="suubmit-click"
            onClick={clickHandler}
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
