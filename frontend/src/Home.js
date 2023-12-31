// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import RecipePreview from './components/RecipePreview.tsx';
// import axios from "axios";
import useRecipes from "./utils/axiosutils.js"; 

function Home() {
  const RecipeData = useRecipes()
  return (
    <div className="container pagecontainer">
      <h1>Confections by Arya</h1>
      <div className="row">
          {RecipeData.map(recipe => 
          <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.desc} link={"/recipe/"+recipe.name}/>
          )}
        </div>
    </div>
  );       
}

export default Home;

// create a new module that will load the RecipeData into a state variable on start of the application
// load this into a module which will be imported by all of the things that need it
// extract images, don't want images in RecipeData, want them as separate files --> images should be url's not raw data 
