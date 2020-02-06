import React from "react";
import styled from "styled-components";
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


const UserData = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-black);
  font-size: 1.5rem;
  width: auto;
  letter-spacing: -0.15px;
  line-height: 3rem;
  white-space: nowrap;
`;

const PointCounter = styled.div`
  background: #ededed;
  border-radius: 100px;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0em 1em;
  margin-left: 1em;
`;

const Coin = styled.img.attrs({
  src: "/icons/coin.svg",
  alt: "coin"
})`
  height: 60%;
  cursor: pointer;
  margin-top: 0.2em;
`;

export default User;
