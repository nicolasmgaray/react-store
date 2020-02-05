import React from "react";
import styled from "styled-components";

const StyledHistory = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  align-items: center;
  margin: 1em 0em;
  border: 0.1em solid black;
  min-height: 6em;
  background: rgba(255, 255, 255, 0.9);
  flex-wrap:wrap;
  padding: 1em 0em;
`;
const StyledImage = styled.img`
  border-radius: 360px;
  height: 5em;
  width: 5em;

  border: 0.1em solid var(--color-acento);
  object-fit: cover;
  margin: 0em 2em;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  flex: 1 0;
`;

const StyledPrice = styled.div`
  background: var(--color-acento);
  border-radius: 25px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  width: 8em;
  height: 2em;
  padding: 1em;
  margin: 1em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const History = ({ name, cost, createDate, img }) => (
  <StyledHistory>
    <StyledImage alt={name} src={img.url} />
    <StyledDetails>
      <b>{name}</b>
      <span>Reedemed on: {createDate}</span>
    </StyledDetails>
    <StyledPrice>${cost}</StyledPrice>
  </StyledHistory>
);

export default History;
