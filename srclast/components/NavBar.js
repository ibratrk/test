import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/Samsung">Samsung</Link>
      <Link to="/IPhone">IPhone</Link>
      <Link to="/ProductList">ProductList</Link>
    </div>
  );
};

export default NavBar;