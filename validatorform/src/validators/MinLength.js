import React, { useEffect, useState } from "react";
import "../components/ValidatorInput.css";
import circleX from "../static/circleX.svg";
import circleCheck from "../static/circleCheck.svg";

export default function MinLength(props) {
  const [minLengthValid, setMinLengthValid] = useState(false);

  const { inputValue, minLength } = props;
  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    if (inputValue.length < minLength) {
      setMinLengthValid(false);
    } else {
      setMinLengthValid(true);
    }
  }, [inputValue, minLength]);

  return (
    <React.Fragment>
      <div className="validatorWrapper">
        <i className="icon">
          <img src={minLengthValid ? circleCheck : circleX} alt="validity" />
        </i>
        <p className="validatorText" style={{ color: minLengthValid ? correctColour : errorColour }}>
          Atleast {props.minLength} characters.
        </p>
      </div>
    </React.Fragment>
  );
}
