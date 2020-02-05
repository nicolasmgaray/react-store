import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center; 
  color: var(--color-acento);
  font-weight:bold;
  flex-direction: column;
  width: auto;
  min-width: 8em;
  padding:  0.5em;
`;

const StyledRow = styled.div`
    padding: 0.2em 0em;
`

const User = ({ username, points }) => (
  <StyledUser>
    <StyledRow>{username}</StyledRow>
    <StyledRow>Points: {points}</StyledRow>
  </StyledUser>
);

export default User;
