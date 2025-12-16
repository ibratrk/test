import './App.css';
import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Students from './pages/Students';
import Add from './pages/Add';
import Update from './pages/Update';
import './styles/Style.css';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Counter from './components/Counter'; 

function App() {
  

  return (
    
    <div className="App">

      <Router>
        
        <Counter startValue={3}/>
        <NavBar /> 
        <Routes>
          <Route path ="/" excat Component={Home}/>
          <Route path ="/menu" excat Component={Menu}/>
          <Route path ="/about" excat Component={About}/>
          <Route path ="/contact" excat Component={Contact}/>
          <Route path ="/students" excat Component={Students}/>
          <Route path="/add" element ={<Add />}/>
          <Route path="/update/:id" element ={<Update />}/>          
        </Routes>
        <Footer />
        </Router>      
    </div>
  ); 
}
export default App;
