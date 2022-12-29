import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";

  import history from "./history";

  //Layout imports
  //

  const routes = [
    {
        path: "/Register",
        // component: Register,
        // layout: AuthLayout,
        publicRoute: true,
      },
  ]