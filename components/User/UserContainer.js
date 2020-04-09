import React, { useState } from "react";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/ducks/User";
import Swal from "sweetalert2";

const UserContainer = () => {
  const { name, points } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { addPoints } = actions;
  const [isAddingPoints, setAddingPoints] = useState(false);

  const handleAddPoints = async () => {
    try {
      setAddingPoints(true);
      await dispatch(addPoints(1000));
      Swal.fire({
        icon: "success",
        title: "Added 1000 points"
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err
      });
    } finally {
      setAddingPoints(false);
    }
  };

  return (
    <User
      points={points}
      isAddingPoints={isAddingPoints}
      addPoints={handleAddPoints}
      username={name}
    ></User>
  );
};

export default UserContainer;
