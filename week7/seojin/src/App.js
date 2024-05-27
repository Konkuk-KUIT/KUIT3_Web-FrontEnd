import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/MyPage";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
