import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";

const AppOne = React.lazy(() => import("remote1/App"));
const AppTwo = React.lazy(() => import("remote2/App"));

const App = () => (
  <Routes>
    <Route path="app1/*" element={<AppOne />} />
    <Route path="app2/*" element={<AppTwo />} />
    <Route
      path="/"
      element={
        <ContainerApp
          AppOne={AppOne}
          AppTwo={AppTwo}
        />
      }
    />
  </Routes>
);

export default App;
