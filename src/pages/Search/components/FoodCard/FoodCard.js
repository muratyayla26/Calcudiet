import React from "react";
import styles from "./FoodCard.module.scss";

function FoodCard({ recipe }) {
  console.log(recipe);
  console.log(recipe.label);
  return (
    <li className={styles.container}>
      <div className={styles.FoodCard}>
        <img className={styles.img} alt="" src={recipe.image} />
        <p className={styles.p1}>{recipe.label}</p>
        <p className={styles.p2}>servis sayısı: {recipe.yield}</p>
      </div>
    </li>
  );
}

export default FoodCard;
