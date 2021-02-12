import React from "react";
import styles from "./RecipeCard.module.scss";

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.propertyCard}>

        <img className={styles.cardImage} src={recipe.image} alt=""></img>


      <div className={styles.propertyDescription}>
        <div className={styles.propertyImageTitle}>{recipe.name}</div>

        <p>
          <strong>Calories: {parseInt(recipe.calory)} kcal</strong>
        </p>

        {/* <div className={styles.buttonHolder}></div> */}
		
      </div>
    </div>
  );
};

export default RecipeCard;
