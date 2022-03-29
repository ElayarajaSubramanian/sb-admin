import React from "react";
import UserForm from "./components/UserForm";

const AddUser = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add User</h1>
      </div>
      <UserForm />
    </div>
  );
};

export default AddUser;
