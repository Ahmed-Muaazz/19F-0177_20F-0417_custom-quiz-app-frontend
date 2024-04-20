import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/signIn" ||
    location.pathname === "/emailVerification" ||
    location.pathname === "/forgot-password"
  ) {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <h4>Custom Quiz App</h4>
          </Link>
        </div>
        <div className="auth-links">
          <Link to="/signup" className="signup-link">
            SIGN UP
          </Link>
          <Link to="/signIn" className="signin-link">
            SIGN IN
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h4>Custom Quiz App</h4>
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <nav className={`navigation ${showMenu ? "show" : ""}`}>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
        <NavLink to="/design-quizzes">DESIGN QUIZZES</NavLink>
        <NavLink to="/attempt-quizzes">ATTEMPT QUIZZES</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>

      <div className="auth-links">
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;
