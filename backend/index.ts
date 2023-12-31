import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
console.log("Backend RUNNING!"); 


mongoose.set("strictQuery", false);
const url = "mongodb+srv://recipes:bakingisfun@cluster0.tlzcb9k.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(() => "CONNECTED TO MONGODB!")
.catch((err) => console.log(`Error connecting to DB: ${err}`));


app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", (recipeRouter));

app.listen(3001);