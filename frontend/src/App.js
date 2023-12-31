// import logo from './logo.svg';
import './App.css';
import React from "react";
import RecipePreview from './components/RecipePreview.tsx';
// import RecipeData from "./RecipeData.json";
import Home from "./Home.js";
import Recipe from "./Recipe.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav.tsx";
import About from "./About.tsx";


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>

   
  );
}

export default App;