import React from "react";
import { UserData, PointCounter, Coin } from "./../../../styles/User";
import Spinner from "../../UI/Spinner";

const User = ({ username, points, addPoints, isAddingPoints }) => (
  <UserData>
    {username}
    <PointCounter>
      {points}
      {isAddingPoints ? <Spinner></Spinner> : <Coin onClick={addPoints} />}
    </PointCounter>
  </UserData>
);

export default User;
