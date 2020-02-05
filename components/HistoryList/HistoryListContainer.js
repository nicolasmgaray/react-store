import React from "react";
import { useSelector } from "react-redux";
import HistoryList from "./HistoryList";
import Spinner from "../Spinner";

const HistoryListContainer = () => {
  const { history, fetching } = useSelector(state => state.user);

  if (fetching) return <Spinner></Spinner>;
  else return <HistoryList items={history}></HistoryList>;
};

export default HistoryListContainer;
