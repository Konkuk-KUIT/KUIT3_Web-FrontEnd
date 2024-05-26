import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";
import Order from "./Order/Order";
import Mypage from "./Mypage/Mypage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<Stores />} />
        <Route path="/:categoryId/:storeId" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/myPage" element={<Mypage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
