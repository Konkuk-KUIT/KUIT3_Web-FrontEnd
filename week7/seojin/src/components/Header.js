import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/myPage" className="link">
        My Page
      </Link>
      <Link to="/detail" className="link">
        Details
      </Link>
    </div>
  );
};
export default Header;
