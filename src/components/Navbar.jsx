import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "white" }}>Home</Link>
      <Link to="/login" style={{ marginRight: "1rem", color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
    </nav>
  );
};

export default Navbar;