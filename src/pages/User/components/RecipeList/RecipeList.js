import React from "react";
import styles from "./RecipeList.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({ recipes }) => (
	<>
		<div className={styles.titleHolder}>
			<h2 className={styles.recipeTitle}>Recipe List</h2>
		</div>
		<div className={styles.card}>
			{recipes.map((recipe) => (
				<RecipeCard recipe={recipe} key={recipe.id} />
			))}
		</div>
	</>
);

export default RecipeList;
