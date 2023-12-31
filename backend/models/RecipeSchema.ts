import { IntegerType } from "mongodb";
import {Document, Schema, model} from "mongoose";

export interface Recipe extends Document {
    name: string, 
    image: string, 
    price: number,
    desc: string, 
    ingredients: string[], 
    directions: string[]
}

const RecipeSchema = new Schema<Recipe> (
    {
    name: {type: String, required: true},
    image: {type: String, required: true},
    desc: {type: String, required: true},
    ingredients: {type: [String], required: true},
    directions: {type: [String], required: true},
    },
    { collection: "Recipes" }
);

const Recipe = model<Recipe>("RecipeCollections", RecipeSchema);

export default Recipe;