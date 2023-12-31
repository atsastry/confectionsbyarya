// import axios from "axios"; // library that allows us to get information from websites 
import {useEffect, useState} from "react";
// import {setRecipeData} from "../App";

// const [RecipeData, setRecipeData] = useState([]);


const useRecipes = () => {
    const [recipeData, setRecipeData] = useState([]);
  
    useEffect(() => {
      const fetchRecipeData = async () => {
        const rawRecipeData = await fetch(
          'https://backend-jejjn5aroq-uc.a.run.app/api/recipes'
        );
        const recipeArray = await rawRecipeData.json();
        setRecipeData(recipeArray);
      };
      fetchRecipeData();
    }, [setRecipeData]);
  
    return recipeData;
  };

export default useRecipes;



