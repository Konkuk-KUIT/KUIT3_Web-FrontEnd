import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import User from "./User";
import Login from "./Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<User />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
