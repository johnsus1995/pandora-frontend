import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={`${styles.AuthLayout} container-fluid`}>
      <nav className="navbar">
        <div className="left">
          <p>NEXCC</p>
        </div>
        <div className="right">
          <ul>
            <li>Customers</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
