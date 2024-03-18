import React from "react";
import { Link, Outlet } from "react-router-dom";
import login_icon from "../assets/login.png";
import "./Navbar.css";

function navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link>LONGINES</Link>
        <Link>Search</Link>
      </div>
      <div className="navbar-right">
        <Link>Watches</Link>
        <Link>Our Universe</Link>
        <Link>Customer Service</Link>
        <Link>Login</Link>
      </div>
    </div>
  );
}

export default navbar;
