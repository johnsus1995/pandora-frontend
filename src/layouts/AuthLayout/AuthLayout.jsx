import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={`${styles.AuthLayout} container-fluid`}>
      <nav className="navbar">
        <h2>NEXCC</h2>
        <ul className="right">
          <li>Option1</li>
          <li>Option2</li>
          <li>Logout</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
