import React from "react";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
	return (
		<div className={styles.propertyCard}>
			<a href="#">
				<div className={styles.propertyImage}>
					<img className={styles.cardImage} src={recipe.image} alt=""></img>
					<div className={styles.propertyImageTitle}>{recipe.name}</div>
				</div>
			</a>
			<div className={styles.propertyDescription}>
				<h5>{recipe.name}</h5>
				<p>
					<strong>Calories: {parseInt(recipe.calory)} kcal</strong>
				</p>
				<div className={styles.buttonHolder}></div>
			</div>
		</div>
	);
};

export default RecipeCard;
