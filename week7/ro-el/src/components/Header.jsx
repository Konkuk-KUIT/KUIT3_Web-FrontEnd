import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return <div>
    <Link to="/">홈</Link>
    <Link to="/detail">상세</Link>
  </div>;
};

export default Header;
