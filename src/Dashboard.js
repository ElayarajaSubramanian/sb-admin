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
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div className="dropdown no-arrow">
                <button
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <button className="dropdown-item">Action</button>
                  <button className="dropdown-item">Another action</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item">Something else here</button>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
                <canvas
                  id="myAreaChart"
                  style={{ display: "block", height: "320px", width: "782px" }}
                  width="977"
                  height="400"
                  className="chartjs-render-monitor"
                ></canvas>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Revenue Sources
              </h6>
              <div className="dropdown no-arrow">
                <button
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <button className="dropdown-item">Action</button>
                  <button className="dropdown-item">Another action</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item">Something else here</button>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
                <canvas
                  id="myPieChart"
                  width="447"
                  height="306"
                  style={{ display: "block", height: "245px", width: "358px" }}
                  className="chartjs-render-monitor"
                ></canvas>
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info"></i> Referral
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
