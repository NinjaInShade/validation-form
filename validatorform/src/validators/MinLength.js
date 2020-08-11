import React, { useEffect } from "react";
import "../components/ValidatorInput.css";
import circleX from "../static/circleX.svg";
import circleCheck from "../static/circleCheck.svg";

export default function MinLength(props) {
  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  useEffect(() => {
    if (!props.inputValue) {
      return;
    }

    if (props.inputValue.length < props.minLength) {
      props.setMinLengthValid(false);
    } else {
      props.setMinLengthValid(true);
    }
  }, [props]);

  return (
    <React.Fragment>
      <div className="validatorWrapper">
        <i className="icon">
          <img src={props.minLengthValid ? circleCheck : circleX} alt="validity" />
        </i>
        <p className="validatorText" style={{ color: props.minLengthValid ? correctColour : errorColour }}>
          Atleast {props.minLength} characters.
        </p>
      </div>
    </React.Fragment>
  );
}
