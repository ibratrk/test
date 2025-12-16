import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from "react";         
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentRecords from './components/StudentRecords';

export const MessageContext = createContext();
function App() {
  const message = "Salam from About page! This message is shared using useContext.";

  return (
    <div className="App">
      <Router>
        <MessageContext.Provider value={message}>
          <NavBar />

          {/* 👇 Place the routes here */}
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/StudentRecords" element={<StudentRecords />} />
          </Routes>

          
        </MessageContext.Provider>
      </Router>
    </div>
  
  );
}

export default App;