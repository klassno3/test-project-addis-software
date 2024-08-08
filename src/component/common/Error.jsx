import React from "react";
import styled from "@emotion/styled";
const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  padding: 100px 0px;
  width: inherit;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
`;
const Error = ({ error }) => {
  return <FlexContainer>{error}</FlexContainer>;
};

export default Error;
