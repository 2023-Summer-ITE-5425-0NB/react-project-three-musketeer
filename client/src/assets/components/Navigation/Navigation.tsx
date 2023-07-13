import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navgation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../../page/Login/AuthContext";

const Navigation = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    // Perform logout logic, such as clearing user data and resetting login status
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
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
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
          <li className="nav-item" style={{ marginLeft: "auto" }}>
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
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
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
