import React from "react";
import styles from "./_dish.module.scss";
import DishList from "./DishList.js";

function DishContainer() {
  return (
    <div className={styles.dishContainer}>
      <h2>Popular Dish</h2>
      <div className={styles.cardListContainer}>
        <DishList />
      </div>
    </div>
  );
}

export default DishContainer;
