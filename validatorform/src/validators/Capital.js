import React, { useEffect } from "react";
import "../components/ValidatorInput.css";
import circleX from "../static/circleX.svg";
import circleCheck from "../static/circleCheck.svg";

export default function Capital(props) {
  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  useEffect(() => {
    if (!props.inputValue) {
      return;
    }

    for (var i = 0; i < props.inputValue.length; i++) {
      var regex = /\d/g;
      if (regex.test(props.inputValue[i])) {
        props.setCapitalValid(false);
        continue;
      }

      if (props.inputValue[i] === props.inputValue[i].toUpperCase()) {
        props.setCapitalValid(true);
      } else {
        if (props.inputValue === props.inputValue.toLowerCase()) {
          props.setCapitalValid(false);
        }
      }
    }
  }, [props]);

  return (
    <React.Fragment>
      <div className="validatorWrapper">
        <i className="icon">
          <img src={props.capitalValid ? circleCheck : circleX} alt="" />
        </i>
        <p className="validatorText" style={{ color: props.capitalValid ? correctColour : errorColour }}>
          One capital letter.
        </p>
      </div>
    </React.Fragment>
  );
}
