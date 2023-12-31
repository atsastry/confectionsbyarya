import express, { Request, Response, Router } from "express";
import Recipe from "../models/RecipeSchema";

const router: Router = express.Router();

// get all recipes from database
router.get("/recipe", async (req: Request, res : Response) => {
    const recipes = await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
});

// get recipe by name 
router.get("/recipe/:name", async (req: Request, res : Response) => {
    const recipes = await Recipe.find({name: req.params.name});
    console.log(recipes);
    res.send(recipes);
})

//updating ingredient in specific recipe
router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        await recipe.save();
        res.send("Added ingredient");
    }
    res.send("failed to add ingredient. tough");
})

export default router;