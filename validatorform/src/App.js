import React, { useState, useEffect } from "react";
import "./App.css";
import close from "./static/close.svg";

import ValidatorInput from "./components/ValidatorInput";

const blueTheme = {
  lightColour: "#A8DCF3",
  darkestColour: "#417397",
};

const formTitle = "Signup";

const inputs = [
  { label: "Username", validators: ["MinLength"] },
  { label: "Email", validators: ["Email"] },
  { label: "Password", validators: ["MinLength", "Capital"] },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [overallValid, setOverallValid] = useState(false);

  const [calling, setCalling] = useState(true);
  const [validAmount, setValidAmount] = useState(0);
  const validatorAmount = inputs.reduce((carry, { validators }) => carry + validators.length, 0);

  let finalNum = 0;

  function callback(num) {
    finalNum = finalNum + num;
    setValidAmount(finalNum);
    setCalling(false);
  }

  function submitHandler(e) {
    setCalling(true);
    e.preventDefault();
    openModal();
  }

  useEffect(() => {
    if (validatorAmount === validAmount) {
      // All inputs are validated.
      setOverallValid(true);
    } else {
      // Not all inputs are correctly validated.
      setOverallValid(false);
    }
  }, [validAmount, validatorAmount]);

  async function openModal() {
    await setTimeout(function () {
      setShowModal(true);
    }, 500);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="body">
      <div style={showModal ? { background: "rgba(0, 0, 0, 0.7)", height: "100vh", width: "100%", position: "absolute", zIndex: "500" } : {}}></div>
      <div className="modal" style={showModal ? { display: "flex" } : { display: "none" }}>
        <p className="modalText" style={{ color: blueTheme.darkestColour }}>
          The form is <span style={overallValid ? { color: `#4CAF50` } : { color: "#a8324a" }}>{overallValid ? "valid" : "invalid"}</span>. Please
          make sure the input requirements have been met.
        </p>
        <img src={close} alt="close" onClick={closeModal} className="modalClose" />
      </div>
      <section
        className="cardContainer"
        style={{
          backgroundColor: `white`,
          border: `1px solid ${blueTheme.darkColour}`,
        }}
      >
        <h1 style={{ color: `${blueTheme.darkestColour}` }}>{formTitle}</h1>
        <form>
          <React.Fragment>
            {inputs.map(({ validators, label }, index) => {
              return (
                <ValidatorInput
                  validators={validators}
                  key={index}
                  lightColour={blueTheme.lightColour}
                  darkestColour={blueTheme.darkestColour}
                  label={label}
                  callback={callback}
                  calling={calling}
                />
              );
            })}
          </React.Fragment>
        </form>
        <button
          type="submit"
          style={{ borderColor: `${blueTheme.darkestColour}`, backgroundColor: `${blueTheme.lightColour}` }}
          onClick={submitHandler}
          className="ripple"
        >
          <span className="buttonText" style={{ color: `${blueTheme.darkestColour}` }}>
            Signup
          </span>
        </button>
      </section>
    </div>
  );
}

export default App;
