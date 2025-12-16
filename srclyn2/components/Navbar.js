import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2c3e50",
        gap: "20px", 
      }}
    >
      
      <Link to="/dashboard" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </Link>

      
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
        Dashboard
      </Link>
      <Link
        to="/Studentrecords"
        style={{ color: "white", textDecoration: "none"  }}
      >
        StudentRecords
      </Link>
    </div>
  );
};

export default NavBar;