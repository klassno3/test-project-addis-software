import React from "react";
import styled from "@emotion/styled";
import ClipLoader from "react-spinners/ClipLoader";
const LoaderContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  padding: 50px 0px;
  width: inherit;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <ClipLoader
        color={"#444"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderContainer>
  );
};

export default Loading;
