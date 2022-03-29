import React from "react";
import { useParams } from "react-router-dom";

const DeleteUser = () => {
  const params = useParams();
  return (
    <div className="container-fluid">
      Delete User
      <h1>{params.id}</h1>
    </div>
  );
};

export default DeleteUser;
