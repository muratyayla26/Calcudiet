import React from "react";
import styles from "./SearchDetails.module.scss";
import FoodCard from "../FoodCard/FoodCard.js";

function SearchDetails({ recipe }) {
  console.log("SearcDetails in içinde", recipe);

  return (
    <div className={styles.Details}>
      {recipe.map((item, index) => {
        return <FoodCard recipe={item.recipe} key={index} />;
      })}
    </div>
  );
}

export default SearchDetails;
