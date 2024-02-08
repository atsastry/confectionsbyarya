const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require("mongoose");
const uri = "mongodb+srv://recipes:bakingisfun@cluster0.tlzcb9k.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, //explain 
    strict: true,
    deprecationErrors: true, 
  } 
});

async function getAllRecipes(client) {
  const database = client.db("Recipes");
  const recipesCollection = database.collection("Recipes");
  const recipes = await recipesCollection.find();

  console.log(recipes);
  var result = [];

  for await (const recipe of recipes) {
      console.dir(recipe);
      result.push(recipe);
  }
  return result;
}

app.use(cors())
 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
const Item = require("./models/RecipeModel.js"); // Create the Item model
 
app.get("/api/recipes", async (req, res) => {
  try {
    const items = await getAllRecipes(client);
    console.log(items);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});