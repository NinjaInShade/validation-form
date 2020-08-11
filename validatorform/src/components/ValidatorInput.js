import React, { useState } from "react";
import "./ValidatorInput.css";

import MinLength from "../validators/MinLength";
import Capital from "../validators/Capital";

export default function ValidatorInput(props) {
  const [inputValue, setInputValue] = useState(null);
  const [minLengthValid, setMinLengthValid] = useState(false);
  const [capitalValid, setCapitalValid] = useState(false);

  function inputChangeHandler(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="wrapper">
      <p className="label" style={{ color: `${props.darkestColour}` }}>
        {props.label}
      </p>
      <input
        type={props.label.toLowerCase() === "password" ? "password" : "text"}
        className="input"
        style={{
          borderColor: `${props.darkestColour}`,
          backgroundColor: `${props.lightColour}`,
        }}
        onChange={inputChangeHandler}
      />
      <MinLength setMinLengthValid={setMinLengthValid} inputValue={inputValue} minLength={6} minLengthValid={minLengthValid} />
      <Capital capitalValid={capitalValid} inputValue={inputValue} setCapitalValid={setCapitalValid} />
    </div>
  );
}
