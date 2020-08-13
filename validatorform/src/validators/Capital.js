import React, { useEffect, useState } from "react";
import "../components/ValidatorInput.css";
import circleX from "../static/circleX.svg";
import circleCheck from "../static/circleCheck.svg";

export default function Capital(props) {
  const [capitalValid, setCapitalValid] = useState(false);

  const { inputValue } = props;
  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    for (var i = 0; i < inputValue.length; i++) {
      var regex = /\d/g;
      var pattern = /\W|_/g;
      if (regex.test(inputValue[i]) || pattern.test(inputValue[i])) {
        setCapitalValid(false);
        continue;
      }

      if (inputValue[i] === inputValue[i].toUpperCase()) {
        setCapitalValid(true);
      } else {
        if (inputValue === inputValue.toLowerCase()) {
          setCapitalValid(false);
        }
      }
    }
  }, [inputValue]);

  return (
    <React.Fragment>
      <div className="validatorWrapper">
        <i className="icon">
          <img src={capitalValid ? circleCheck : circleX} alt="" />
        </i>
        <p className="validatorText" style={{ color: capitalValid ? correctColour : errorColour }}>
          One capital letter.
        </p>
      </div>
    </React.Fragment>
  );
}
