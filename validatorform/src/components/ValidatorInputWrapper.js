import React from "react";
import "./ValidatorInputWrapper.css";

export default function ValidatorInputWrapper(props) {
  const circleX = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-x"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#a8324a"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  );

  const circleCheck = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-check"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#4CAF50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  );

  const errorColour = "#a8324a";
  const correctColour = "#4CAF50";

  return (
    <div className="wrapper">
      <p className="label" style={{ color: `${props.darkestColour}` }}>
        {props.label}
      </p>
      <input
        type="text"
        className="input"
        style={{
          borderColor: `${props.darkestColour}`,
          backgroundColor: `${props.lightColour}`,
        }}
      />
      <div className="validatorWrapper">
        <i className="icon">{circleX}</i>
        <p className="validatorText" style={{ color: errorColour }}>
          Atleast 8 characters.
        </p>
      </div>
      <div className="validatorWrapper">
        <i className="icon">{circleCheck}</i>
        <p className="validatorText" style={{ color: correctColour }}>
          One capital letter.
        </p>
      </div>
    </div>
  );
}
