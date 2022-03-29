import React, { useContext } from "react";
import MonthlyCard from "./components/MonthlyCard";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Dashboard = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          Dashboard {userContext.userName}
        </h1>
        <Link
          to="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </Link>
      </div>
      <div className="row">
        <MonthlyCard
          theme="primary"
          title="Earnings (Monthly)"
          value="$40,000"
          icon="calendar"
        />
        <MonthlyCard
          theme="success"
          title="Earnings (Annual)"
          value="$215,000"
          icon="dollar-sign"
        />
        <MonthlyCard theme="info" title="Tasks" value="50%" icon="clipboard" />
        <MonthlyCard
          theme="warning"
          title="Pending requests"
          value="18"
          icon="comments"
        />
      </div>
    </div>
  );
};

export default Dashboard;
