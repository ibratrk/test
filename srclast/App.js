//ibrahim el turk
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Samsung from "./components/Samsung";
import IPhone from "./components/IPhone";
import ProductList from "./components/ProductList";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Samsung />} />
        <Route path="/Samsung" element={<Samsung />} />
        <Route path="/IPhone" element={<IPhone />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;