import React from "react";
import styles from "./FoodCard.module.scss";

function FoodCard({ recipe }) {
  console.log(recipe);
  console.log(recipe.label);
  return <div className={styles.FoodCard}></div>;
}

export default FoodCard;

/*  <p>{recipe.label}</p>
<img alt="" src={recipe.image} />
<p>servis sayısı: {recipe.yield}</p> */
