import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Users = () => {
  const [userData, setUserData] = useState([]);
  useEffect(async () => {
    let users = await axios.get(
      "https://6243424f3da3ac772b00a37a.mockapi.io/users"
    );
    setUserData(users.data);
  }, []);
  const userContext = useContext(UserContext);
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/add-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Add User
        </Link>
      </div>
      <div>
        <p class="mb-4">
          This user tables lists all the details about dashboard users.
        </p>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userData.map((user) => {
                    return (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startDate}</td>
                        <td>${user.salary}</td>
                        <td>
                          <Link
                            to={`/view-user/${user.id}`}
                            className="btn btn-primary mr-2"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit-user/${user.id}`}
                            className="btn btn-info mr-2"
                          >
                            Edit
                          </Link>
                          <Link
                            to={`/delete-user/${user.id}`}
                            className="btn btn-danger"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
