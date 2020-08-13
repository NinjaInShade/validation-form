import React, { useState } from "react";
import "./App.css";
import close from "./static/close.svg";

import ValidatorInput from "./components/ValidatorInput";

const blueTheme = {
  lightColour: "#A8DCF3",
  darkestColour: "#417397",
};

const formTitle = "Signup";

function App() {
  const [showModal, setShowModal] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    openModal();
  }

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
          You have clicked the button. Add confirm of form validity at some point for improvement.
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
          <ValidatorInput lightColour={blueTheme.lightColour} darkestColour={blueTheme.darkestColour} label="Username" validators={["MinLength"]} />
          <ValidatorInput lightColour={blueTheme.lightColour} darkestColour={blueTheme.darkestColour} label="Email" validators={["Email"]} />
          <ValidatorInput
            lightColour={blueTheme.lightColour}
            darkestColour={blueTheme.darkestColour}
            label="Password"
            validators={["MinLength", "Capital"]}
          />
        </form>
        <button
          type="submit"
          style={{ borderColor: `${blueTheme.darkestColour}`, backgroundColor: `${blueTheme.lightColour}` }}
          onClick={submitHandler}
          className="ripple"
        >
          <span className="buttonText" style={{ color: `${blueTheme.darkestColour}` }}>
            {/* Add functionalility telling whever form is valid or not */}
            Signup
          </span>
        </button>
      </section>
    </div>
  );
}

export default App;
