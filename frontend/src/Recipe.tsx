import React from "react"; 
import {Link, useParams} from "react-router-dom";
import useRecipes from "./utils/axiosutils";

interface Recipe {
    id: number;
    name: string;
    price: number;
    image: string;
    desc: string;
    ingredients: string[];
    directions: string[];
}

function Recipe() { // name of component should always mirror name of file
    let RecipeData : Recipe[] = useRecipes();
    let {name} = useParams();
    console.log(name);
    console.log(RecipeData);
    let recipe = RecipeData.find(e => e.name == name);
    return recipe? (
    <div>
        <div className="flex container">
            <h2><Link to={"/recipe/"+recipe.name}>{recipe.name} </Link> </h2>
            <img src={recipe.image}/>
            <p>{recipe.desc}</p>
        </div>

        <div className="container pagecontainer">
            <ul>
                {recipe.ingredients.map(ingredient => 
                <li>{ingredient}</li>)
                }
            </ul>

            <ol>
                {recipe.directions.map(direction => 
                <li>{direction}</li>)
                }
            </ol>
        </div>
    </div>
    ) :(
        <div>
            recipe not found;
        </div>
    );
}

export default Recipe;