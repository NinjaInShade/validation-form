import React from "react";
import "./ValidatorForm.css";

import ValidatorInputs from "./ValidatorInputs";

export default function ValidatorForm(props) {
  return (
    <section
      className={`cardContainer`}
      style={{
        backgroundColor: `white`,
        border: `1px solid ${props.darkColour}`,
      }}
    >
      <h1 style={{ color: `${props.darkestColour}` }}>{props.title}</h1>
      <form>
        <ValidatorInputs
          darkestColour={props.darkestColour}
          lightColour={props.lightColour}
        />
      </form>
    </section>
  );
}
