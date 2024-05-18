import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
