import React from 'react'
import logo from '../assets/logo.png';
import  '../styles/NavBar.css'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
     
        <Link to ="/"> <img src={logo} alt ="not found" /></Link>
     
   
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/hook1"> UseState </Link>
        <Link to="/hook2"> UseContext </Link>
        <Link to="/hook3"> UseEffect </Link>
         <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        
      </div>
    </div>
  )
}

export default NavBar
