//npm start
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarTest';
import Dashboard from './components/Dashboard';
import Tasklist from './components/Tasklist';

function App() {

  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Tasklist" element={<Tasklist />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
