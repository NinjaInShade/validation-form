import styled from "styled-components/macro";

export const GroupContainer = styled.div`
  border: 1px solid #b2b2b2;
  border-radius: 6px;
  padding: 15px;
  max-width: ${(props) => props.maxWidth};
`;

export const Container = styled.div`
  border: 1px solid #b2b2b2;
  border-radius: 6px;
  display: flex;
  margin: 25px 10px 10px 10px;
`;

export const Title = styled.h2`
  margin: 15px 10px 30px 10px;
  font-weight: normal;
`;

export const Label = styled.label`
  padding: 8px 10px;
  background-color: #dfe1e5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: ${(props) => props.cursor};
  min-width: 90px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  padding: 8px 5px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  cursor: ${(props) => props.cursor};
`;

export const ErrorTextGroup = styled.div`
  margin: 5px 10px;
  display: flex;
  align-items: center;
  color: ${(props) => props.colour};
`;

export const ErrorTextP = styled.p`
  margin: 0 5px;
`;
