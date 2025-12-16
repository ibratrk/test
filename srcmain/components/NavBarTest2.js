import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBarTest2.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to ="/"> <img src={logo} alt ="not found" /></Link>
     
      <div className="rightSide">
        <Link to="/Dashboard2">Dashboard</Link>
        <Link to="/studentRecords">studentRecords</Link>
      </div>
    </div>
  );
};

export default NavBar;
