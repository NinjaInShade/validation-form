import React, { useState } from "react";
import "./ValidatorInput.css";
import passwordHidden from "../static/passwordHidden.svg";
import passwordShown from "../static/passwordShown.svg";

import MinLength from "../validators/MinLength";
import Capital from "../validators/Capital";
import Email from "../validators/Email";

export default function ValidatorInput(props) {
  const [inputValue, setInputValue] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [minLengthValid, setMinLengthValid] = useState(false);
  const [capitalValid, setCapitalValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  function inputChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function passwordToggleHandler(e) {
    showPassword === false ? setShowPassword(true) : setShowPassword(false);
  }

  return (
    <div className="wrapper">
      <p className="label" style={{ color: `${props.darkestColour}` }}>
        {props.label}
      </p>
      <input
        type={props.label.toLowerCase() === "password" ? `${!showPassword && "password"}` : "text"}
        className={props.label.toLowerCase() === "password" ? "input passwordPadding" : "input"}
        style={{
          borderColor: `${props.darkestColour}`,
          backgroundColor: `${props.lightColour}`,
        }}
        onChange={inputChangeHandler}
      />
      {/* password hidden */}
      {props.label.toLowerCase() === "password" && showPassword === false && (
        <img src={passwordHidden} alt="passwordToggle" className="passwordToggle" onClick={passwordToggleHandler} />
      )}
      {/* password shown */}
      {props.label.toLowerCase() === "password" && showPassword === true && (
        <img src={passwordShown} alt="passwordToggle" className="passwordToggle" onClick={passwordToggleHandler} />
      )}

      {props.validators.includes("MinLength") && (
        <MinLength setMinLengthValid={setMinLengthValid} inputValue={inputValue} minLength={6} minLengthValid={minLengthValid} />
      )}
      {props.validators.includes("Capital") && <Capital capitalValid={capitalValid} inputValue={inputValue} setCapitalValid={setCapitalValid} />}
      {props.validators.includes("Email") && <Email inputValue={inputValue} emailValid={emailValid} setEmailValid={setEmailValid} />}
    </div>
  );
}
