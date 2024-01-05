// import logo from './logo.svg';
import './App.css';
import React from "react";
import RecipePreview from './components/RecipePreview.tsx';
// import RecipeData from "./RecipeData.json";
import Home from "./Home.js";
import Recipe from "./Recipe.tsx";
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Nav from "./Nav.tsx";
import About from "./About.tsx";

function NotFound () {
  let location = useLocation();
  return (
    <div>
      Cannot find file {location.pathname}.
    </div>
  ); 
}

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

   
  );
}

export default App;