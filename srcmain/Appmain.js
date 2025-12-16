import './App.css';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About, { MessageContext } from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';
import Hook3 from './components/Hook3';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const message = "Salam from About page! This message is shared using useContext.";

  return (
    <div className="App">
      <Router>
        <MessageContext.Provider value={message}>
          <NavBar />

          {/* 👇 Place the routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hook1" element={<Hook1 />} />
            <Route path="/hook2" element={<Hook2 />} />
            <Route path="/hook3" element={<Hook3 />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </MessageContext.Provider>
      </Router>
    </div>
  );
}

export default App;
