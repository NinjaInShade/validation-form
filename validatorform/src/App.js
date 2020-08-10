import React from "react";
import "./App.css";

import ValidatorForm from "./components/ValidatorForm";

// eslint-disable-next-line
const greenTheme = {
  lightColour: "#8de0a4",
  darkColour: "#40cf67",
  darkestColour: "#207537",
};

const blueTheme = {
  lightColour: "#A8DCF3",
  darkColour: "#45B7DF",
  darkestColour: "#417397",
};

function App() {
  return (
    <ValidatorForm
      title="Signup"
      lightColour={blueTheme.lightColour}
      darkColour={blueTheme.darkColour}
      darkestColour={blueTheme.darkestColour}
    />
  );
}

export default App;
