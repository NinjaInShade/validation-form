import React from "react";
import { Container, Input, Label, Item, GroupContainer, Title, ErrorTextGroup, ErrorTextP } from "./InputGroupStyle";

export default function InputGroup({ children }) {
  return <Container>{children}</Container>;
}

InputGroup.Container = function InputGroupContainer({ maxWidth = "500px", children }) {
  return <GroupContainer maxWidth={maxWidth}>{children}</GroupContainer>;
};

InputGroup.Title = function InputGroupTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

InputGroup.Label = function InputGroupLabel({ children, cursor = "initial", ...props }) {
  return (
    <Label {...props} cursor={cursor}>
      {children}
    </Label>
  );
};

InputGroup.Item = function InputGroupItem({ children, cursor = "pointer", ...props }) {
  return (
    <Item {...props} cursor={cursor}>
      {children}
    </Item>
  );
};

InputGroup.Input = function InputGroupInput({ ...props }) {
  return <Input {...props} />;
};

InputGroup.ErrorText = function InputGroupErrorText({ children, ...props }) {
  return children.map((error) => {
    return (
      <ErrorTextGroup colour={error.valid ? "#229e24" : "#ce2121"} {...props} key={error.msg}>
        <i key={error.valid ? "fas fa-thumbs-up" : "fas fa-exclamation-circle"}>
          <span className={error.valid ? "fas fa-thumbs-up" : "fas fa-exclamation-circle"}></span>
        </i>
        <ErrorTextP>{error.msg}</ErrorTextP>
      </ErrorTextGroup>
    );
  });
};
