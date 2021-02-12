import React from "react";
import styles from "./RecipeCard.module.css";
import { useDrag } from 'react-dnd';
const ItemTypes = {
	CARD: 'card',
};

const RecipeCard = ({ recipe }) => {

	const [{ isDragging }, drag] = useDrag({
		item: {
			type: ItemTypes.CARD,
			data: recipe,
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<div 
		ref={drag}
		className={isDragging ? styles["propertyCard-dragging"] : styles["propertyCard"]}>
			<div className={styles.propertyImage}>
				<img className={styles.cardImage} src={recipe.image} alt=""></img>
				<div className={styles.propertyImageTitle}>{recipe.name}</div>
			</div>

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
