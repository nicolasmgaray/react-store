import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  padding-top: 6em;
`;

const Spinner = () => (
  <StyledSpinner>
    <div className="loader"></div>
  </StyledSpinner>
);

export default Spinner;
