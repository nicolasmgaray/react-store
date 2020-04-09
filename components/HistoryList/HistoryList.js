import React from "react";
import { List } from "../../styles/History";
import HistoryItem from "../HistoryItem";

const HistoryList = ({ items }) => {
  return (
    <List>
      {items.map((x, i) => (
        // Its not good to use index as key, but the aerolab api is sending duplicate keys (wich is worst!)
        <HistoryItem {...x} key={i}></HistoryItem>
      ))}
    </List>
  );
};

export default HistoryList;
