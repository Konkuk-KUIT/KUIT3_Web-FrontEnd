import React from 'react'
import {Route, Routes} from "react-router-dom";
import Cart from './Cart';
import Store from './Store';
import Stores from './Stores';

const Router = () => {
  return (
    <Routes>
        <Route path="/store" element={<Stores />} />
        <Route path="/store/:id" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Router;