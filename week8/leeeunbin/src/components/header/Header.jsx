import React from "react";
import './Header.scss';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackward = () => {
    navigate(-1);
  }
  return (
    <div className="Header">
      {location.pathname !== "/" && (
        <button className="backward" onClick={handleBackward}> {`<`} </button>
      )}
      <Link to="/">
        {location.pathname !== "/" && (
          <button className="home">
            <FontAwesomeIcon icon={faHome} />
          </button>
        )}
      </Link>
    </div>
  )
}

export default Header;