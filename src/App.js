import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../src/routes/index";
import Layout from "../src/layout/index";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
