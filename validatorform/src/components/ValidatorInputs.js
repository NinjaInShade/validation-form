import React from "react";

import ValidatorInputWrapper from "./ValidatorInputWrapper";

export default function ValidatorInput(props) {
  return (
    <React.Fragment>
      <ValidatorInputWrapper
        lightColour={props.lightColour}
        darkestColour={props.darkestColour}
        label="Email"
      />
      <ValidatorInputWrapper
        lightColour={props.lightColour}
        darkestColour={props.darkestColour}
        label="Password"
      />
    </React.Fragment>
  );
}
