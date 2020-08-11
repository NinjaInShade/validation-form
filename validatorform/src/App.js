import React from "react";
import "./App.css";

import ValidatorInput from "./components/ValidatorInput";

const blueTheme = {
  lightColour: "#A8DCF3",
  darkColour: "#45B7DF",
  darkestColour: "#417397",
};

const formTitle = "Signup";

function App() {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <section
      className="cardContainer"
      style={{
        backgroundColor: `white`,
        border: `1px solid ${blueTheme.darkColour}`,
      }}
    >
      <h1 style={{ color: `${blueTheme.darkestColour}` }}>{formTitle}</h1>
      <form>
        <ValidatorInput
          lightColour={blueTheme.lightColour}
          darkestColour={blueTheme.darkestColour}
          label="Email"
          validators={["MinLength", "Capital"]}
        />
        <ValidatorInput lightColour={blueTheme.lightColour} darkestColour={blueTheme.darkestColour} label="Password" validators={["MinLength"]} />
      </form>
      <button
        type="submit"
        style={{ borderColor: `${blueTheme.darkestColour}`, backgroundColor: `${blueTheme.lightColour}` }}
        onClick={submitHandler}
      >
        <span className="buttonText" style={{ color: `${blueTheme.darkestColour}` }}>
          Signup
        </span>
      </button>
    </section>
  );
}

export default App;
