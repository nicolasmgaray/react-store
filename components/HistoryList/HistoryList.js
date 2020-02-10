import React from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";

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
        // Its not good to use index as key, but the aerolab api is sending duplicate keys (wich is worst!)
        <HistoryItem {...x} key={i}></HistoryItem>
      ))}
    </StyledHistoryList>
  );
};

export default HistoryList;
