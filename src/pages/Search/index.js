import SearchBar from "./components/SearchBar/SearchBar.js";
import styles from "./index.module.scss";
import SearchDetails from "./components/SearchDetails/SearchDetails.js";
import { useState } from "react";

const Search = () => {
  const [recipe, setRecipe] = useState(null);
  console.log(recipe);
  return (
    <div>
      <h1 className={styles.header}>SearcPage</h1>
      <SearchBar setRecipe={setRecipe} />
      <div>{recipe ? <SearchDetails recipe={recipe} /> : ""}</div>
    </div>
  );
};

export default Search;
