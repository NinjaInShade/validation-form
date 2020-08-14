import React, { useEffect, useState } from "react";
import "../components/ValidatorInput.css";
import circleX from "../static/circleX.svg";
import circleCheck from "../static/circleCheck.svg";

export default function Email(props) {
  const [emailValid, setEmailValid] = useState(false);

  const { inputValue } = props;
  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    if (inputValue.includes("@")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [inputValue]);

  useEffect(() => {
    // Prevents first render interefering.
    if (emailValid === null) {
      return;
    }

    if (props.calling) {
      function callback(num) {
        props.callback(num);
      }
      emailValid ? callback(1) : callback(0);
    }
  }, [emailValid, props]);

  return (
    <React.Fragment>
      <div className="validatorWrapper">
        <i className="icon">
          <img src={emailValid ? circleCheck : circleX} alt="" />
        </i>
        <p className="validatorText" style={{ color: emailValid ? correctColour : errorColour }}>
          Please include an @.
        </p>
      </div>
    </React.Fragment>
  );
}
