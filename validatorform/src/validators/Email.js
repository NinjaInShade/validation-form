import React, { useEffect } from "react";
import "../components/ValidatorInput.css";
import circleX from "../static/circleX.svg";
import circleCheck from "../static/circleCheck.svg";

export default function Email(props) {
  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  useEffect(() => {
    if (!props.inputValue) {
      return;
    }

    if (props.inputValue.includes("@")) {
      props.setEmailValid(true);
    } else {
      props.setEmailValid(false);
    }
  }, [props]);

  return (
    <React.Fragment>
      <div className="validatorWrapper">
        <i className="icon">
          <img src={props.emailValid ? circleCheck : circleX} alt="" />
        </i>
        <p className="validatorText" style={{ color: props.emailValid ? correctColour : errorColour }}>
          Please include an @.
        </p>
      </div>
    </React.Fragment>
  );
}
