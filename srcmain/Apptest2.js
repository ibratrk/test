import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBarTest2';
import Dashboard2 from './components/Dashboard2';
import StudentRecords from './components/StudentRecords';

function App() {

  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/Dashboard2" element={<Dashboard2 />} />
            <Route path="/StudentRecords" element={<StudentRecords />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
