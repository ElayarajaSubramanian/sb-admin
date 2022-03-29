import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const params = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://6243424f3da3ac772b00a37a.mockapi.io/users/${params.id}`
      );
      setUserData(user.data);
    }
    fetchData();
  }, [param.id]);

  return (
    <div className="container-fluid">
      View User
      <h1>{userData.name}</h1>
    </div>
  );
};

export default ViewUser;
