import React from "react";
import styled from "styled-components";
import History from "../History";

const StyledHistoryList = styled.div`
  padding: 2em 6em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HistoryList = ({ items }) => {
  return (
    <StyledHistoryList>
      {items.map((x, i) => (
        // Error to use index as key, but the Aerolab API is sending duplicate id's in some items
        <History {...x} key={i}></History>
      ))}
    </StyledHistoryList>
  );
};

export default HistoryList;
