import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={`${styles.AuthLayout} container-fluid`}>
      <nav className="navbar">
        <div className="left">
          <h3>NEXCC</h3>
        </div>
        <div className="right">
          <ul>
            <li>Option1</li>
            <li>Option2</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
