CREATE DATABASE recipes;

CREATE TABLE meditation(
    id SERIAL PRIMARY KEY,
    recipe VARCHAR(255),
    ingredients VARCHAR (max),
    instructions VARCHAR (max)
)
