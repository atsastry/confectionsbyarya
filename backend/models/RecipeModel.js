const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    id: Number,
    name: String, 
    price: Number, 
    image: String,    
    desc: String,   
    ingredients: String, 
    recipe: String,
})

module.exports = mongoose.model("Item", itemSchema);

// nominal change test 