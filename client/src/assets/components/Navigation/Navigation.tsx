import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navgation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../../page/Login/AuthContext";

const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const authContext = useContext(AuthContext);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    authContext.setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        3M
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggleNav}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/catalogue">
              Catalogue
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/articles">
              Articles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          {authContext.isLoggedIn ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link" onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
