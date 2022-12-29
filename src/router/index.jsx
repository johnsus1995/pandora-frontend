import AuthLayout from "layouts/AuthLayout";
import MainLayout from "layouts/MainLayout";
import Login from "pages/Login";
import Register from "pages/Register";
import { Fragment } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  // Outlet,
} from "react-router-dom";

import history from "./history";

const routes = [
  {
    path: "register",
    component: Register,
    layout: AuthLayout,
    publicRoute: true,
  },
  {
    path: "/login",
    component: Login,
    layout: AuthLayout,
    publicRoute: true,
  },
];

const Element = ({ component, layout, publicRoute, privateRoute }) => {
  // const auth = useSelector(state => state.auth);
  // if (privateRoute) {
  //   if (!auth.isAuthenticated) {
  //     return <Navigate to="/login" />;
  //   }
  // } else if (publicRoute) {
  //   if (auth.isAuthenticated) {
  //     return <Navigate to="/" />;
  //   }
  // }

  const Component = component;
  const Layout = layout || Fragment;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

const createRoutes = (routes) => {
  return routes.map((route) => {
    if (route.publicRoute) {
      return (
        <Route path={"/"} element={<AuthLayout />} key={route.path}>
          <Route
            path={route.path}
            element={<Element component={route.component} />}
          />
        </Route>
      );
    } else
      return (
        <Route path={"/"} element={<MainLayout />} key={route.path}>
          <Route
            path={route.path}
            element={<Element component={route.component} />}
          />
        </Route>
      );
  });
};

export default function AppRouter() {
  return (
    <Router location={history.location} navigator={history}>
      <Routes>{createRoutes(routes)}</Routes>
      {/* <Routes>
        <Route path={"/"} element={<AuthLayout />} >
          <Route path={"login"} element={<Login />} />
        </Route>
      </Routes> */}
    </Router>
  );
}
