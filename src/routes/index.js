import React from "react";

const HomePage = React.lazy(() => import("../pages/HomePage/index"));
const SignIn = React.lazy(() => import("../pages/SignIn/index"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/auth/SignIn",
    exact: true,
    name: "SignIn",
    component: SignIn,
  },
];

export default routes;
