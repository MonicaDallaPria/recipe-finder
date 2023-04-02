const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres", 
  password: "MarkCatDog01",
  host: "localhost",
  port: 5432,
  database: "Recipe"
});



module.exports = pool;
