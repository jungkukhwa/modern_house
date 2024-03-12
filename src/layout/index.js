import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../routes/index";
import Header from "./Header";
import Footer from "./Footer";
import "../layout/styles.scss";
const index = () => {
  // route 설정
  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        name={route.name}
        element={<route.component />}
      />
    ) : null;
  });
  return (
    <div>
      <Header />
      <Routes>{menu}</Routes>
      <Footer />
    </div>
  );
};

export default index;
