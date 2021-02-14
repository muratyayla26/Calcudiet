import React, { useState, useEffect } from "react";
import styles from "./RecipeList.module.scss";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({ recipes }) => {
  const [result, setResult] = useState(recipes);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchText = search.toLowerCase();
    setResult(
      recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchText))
    );
  }, [search]);

  return (
    <div className={styles.recipeWrapper}>
      <div className={styles.titleHolder}>
        <h2 className={styles.recipeTitle}>Recipe List</h2>
      </div>
      <div className={styles.recipeSearch}>
        <input
          placeholder="Search by name..."
          id="search"
          name="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.card}>
        {result.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
