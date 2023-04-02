// const express = require('express');
// const app = express();
// const cors = require("cors");
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const request= require("request");


//middleware
app.use(cors());
app.use(express.json());

app.listen(3000)


//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () =>{
  console.log("server has started on port 5000")
})


//CREATE


app.post("/recipes", async (req,res) =>{
  try {
    const { recipe, ingredients, instructions } = req.body;
    const newRecipe = await pool.query("INSERT INTO Recipes (recipe, ingredients, instructions) VALUES($1,$2, $3)",
     [recipe, ingredients, instructions]);

     res.json(newRecipe)
  } catch (error) {
    console.log(error.message);
  }
})
