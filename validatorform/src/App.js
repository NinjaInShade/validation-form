import React, { useState } from "react";
import "./App.css";

import InputGroup from "./components/InputGroup/InputGroup";
import Email from "./validators/Email";
import Capital from "./validators/Capital";
import MinLength from "./validators/MinLength";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({
    username: [{ msg: "Must be 8 characters", valid: false }],
    email: [{ msg: "Must be a valid email", valid: false }],
    password: [
      { msg: "Must be 8 characters", valid: false },
      { msg: "Atleast one capital", valid: false },
    ],
  });

  function input1Handler(e) {
    setInput1(e.target.value);
    const result = MinLength(e.target.value, 8);
    setErrors((prev) => {
      return {
        ...prev,
        username: prev.username.map((old, index) => (index === 0 ? { ...old, valid: result } : old)),
      };
    });
  }

  function input2Handler(e) {
    setInput2(e.target.value);
    const result = Email(e.target.value);
    setErrors((prev) => {
      return {
        ...prev,
        email: prev.email.map((old, index) => (index === 0 ? { ...old, valid: result } : old)),
      };
    });
  }

  function input3Handler(e) {
    setInput3(e.target.value);
    const result = MinLength(e.target.value, 8);
    const result2 = Capital(e.target.value);
    setErrors((prev) => {
      return {
        ...prev,
        password: prev.password.map((old, index) => (index === 0 ? { ...old, valid: result } : index === 1 ? { ...old, valid: result2 } : old)),
      };
    });
  }

  function formHandler() {
    Object.values(errors).some((arr) => arr.some((dataset) => !dataset.valid)) ? console.log("INVALID") : console.log("VALID");
  }

  return (
    <div className="body">
      <InputGroup.Container maxWidth="400px">
        <InputGroup.Title>Sign up</InputGroup.Title>
        <InputGroup>
          <InputGroup.Label>Username</InputGroup.Label>
          <InputGroup.Input placeholder="Enter username" value={input1} onChange={input1Handler}></InputGroup.Input>
        </InputGroup>
        <InputGroup.ErrorText>{errors.username}</InputGroup.ErrorText>

        <InputGroup>
          <InputGroup.Label>Email</InputGroup.Label>
          <InputGroup.Input placeholder="Enter email" value={input2} onChange={input2Handler}></InputGroup.Input>
        </InputGroup>
        <InputGroup.ErrorText>{errors.email}</InputGroup.ErrorText>

        <InputGroup>
          <InputGroup.Label>Password</InputGroup.Label>
          <InputGroup.Input placeholder="Enter password" type={show ? "text" : "password"} value={input3} onChange={input3Handler}></InputGroup.Input>
          <InputGroup.Item onClick={() => setShow(!show)}>
            <i key={show ? "fas fa-eye" : "fas fa-eye-slash"}>
              <span className={show ? "fas fa-eye" : "fas fa-eye-slash"}></span>
            </i>
          </InputGroup.Item>
        </InputGroup>
        <InputGroup.ErrorText>{errors.password}</InputGroup.ErrorText>
        <button onClick={formHandler}>Submit</button>
      </InputGroup.Container>
    </div>
  );
}

export default App;
