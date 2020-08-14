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

  function inputChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function passwordToggleHandler(e) {
    showPassword === false ? setShowPassword(true) : setShowPassword(false);
  }

  function callback(num) {
    props.callback(num);
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

      {/* Validators */}
      {props.validators.includes("MinLength") && <MinLength inputValue={inputValue} minLength={6} callback={callback} calling={props.calling} />}

      {props.validators.includes("Capital") && <Capital inputValue={inputValue} callback={callback} calling={props.calling} />}

      {props.validators.includes("Email") && <Email inputValue={inputValue} callback={callback} calling={props.calling} />}
    </div>
  );
}
