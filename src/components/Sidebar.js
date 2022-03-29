import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider" />

      <li className="nav-item">
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Users</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/products"
          className={(navData) =>
            navData.isActive ? "nav-link active" : "nav-link"
          }
        >
          <i className="fas fa-fw fa-table"></i>
          <span>Products</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default Sidebar;
