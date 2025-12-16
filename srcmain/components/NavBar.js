import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      {/* Left side (logo) */}
      <div className="leftSide" id={openLinks ? 'open' : 'close'}>
        {!openLinks && ( // hide logo when navbar is opened
          <Link to="/"><img src={logo} alt="not found" />
          </Link>
        )}
      </div>

      {/* Right side (links + button) */}
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/hook1">UseState</Link>
        <Link to="/hook2">UseContext</Link>
        <Link to="/hook3">UseEffect</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
