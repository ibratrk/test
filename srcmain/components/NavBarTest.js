import { Link } from 'react-router-dom';
import '../styles/NavBarTest.css';

const NavBar = () => {
  return (
    <div className="navbar">
      
      <div className="rightSide">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Tasklist">Tasklist</Link>
      </div>
    </div>
  );
};

export default NavBar;
