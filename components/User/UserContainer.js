import React from "react";
import User from "./User";
import { useSelector } from "react-redux";

const UserContainer = () => {
  const { name, points } = useSelector(state => state.user);
 // if (!name) return null;
  return <User points={points} username={name}></User>;
};

export default UserContainer;
