import React, { useState, useEffect } from "react";
import axios from "axios";

import Recipe from "./Recipe/Recipe";
import Layout from "./Layout/Layout";
import "./App.css";

function App() {
  const APP_ID = "b3321ede";
  const APP_KEY = "0c3d5e4cb27a018cac6fa5eaa35af3b2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((response) => {
        const dataBase = response.data.hits;
        console.log(dataBase);
        const updateDataBase = dataBase.map((datas) => {
          return {
            key: datas.recipe.calories,
            label: datas.recipe.label,
            image: datas.recipe.image,
            calories: Math.floor(datas.recipe.calories),
            ingredients: datas.recipe.ingredients,
          };
        });
        setRecipes(updateDataBase);

        console.log("useEffect");
      });
  }, [query]);
  console.log("recipes", recipes);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Layout>
      <form className="form" onSubmit={getQuery}>
        <input
          className="section-search"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="button" type="submit">
          SEARCH
        </button>
      </form>

      {recipes.map((recipe) => (
        <Recipe
          key={recipe.label}
          title={recipe.label}
          image={recipe.image}
          calories={recipe.calories}
          ingredients={recipe.ingredients}
        />
      ))}
    </Layout>
  );
}

export default App;
