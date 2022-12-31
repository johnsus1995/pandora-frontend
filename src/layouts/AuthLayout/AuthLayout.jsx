import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={`${styles.AuthLayout} `}>
      <nav className="navbar container-fluid">
        <div className="left">
          <p>NExCC</p>
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
      <footer className="footer">Developed by Jaison John</footer>
    </div>
  );
};

export default AuthLayout;
