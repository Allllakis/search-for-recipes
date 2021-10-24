import React, { useState, useEffect } from "react";
import axios from "axios";

// import MenuContext from "antd/lib/menu/MenuContext";
import Recipe from "./Recipe/Recipe";
import Layout from "./Layout/Layout";
import Loader from "react-loader-spinner";
import ErrorIndicator from "./ErrorIndicator/ErrorIndicator";



import "./App.css";

function App() {
  const APP_ID = "b3321ede";
  const APP_KEY = "0c3d5e4cb27a018cac6fa5eaa35af3b2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((response) => {
        const dataBase = response.data.hits;
        console.log(dataBase)
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
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const spinner = (
    <Loader type="Puff" color="rgba(184, 184, 33)" height={200} width={200} />
  );
  console.log(recipes)

  const content = recipes.map((recipe) => (
    <Recipe
      key={recipe.label}
      title={recipe.label}
      image={recipe.image}
      calories={recipe.calories}
      ingredients={recipe.ingredients}
    />
  ));

  const hasData = !loading && !recipes.length;

  const notValid = <h2 className="error">please enter another label!</h2>;

  const errorMessage = error && hasData ? <ErrorIndicator /> : null;

  return (
    <Layout>
      <div className="find">Find a Recipe</div>
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
      {errorMessage}
      {!error && (loading ? spinner : !!recipes.length ? content : notValid)}
    </Layout>
  );
}

export default App;