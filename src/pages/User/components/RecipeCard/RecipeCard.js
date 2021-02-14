import React from "react";
import styles from "./RecipeCard.module.scss";
import { useDrag } from "react-dnd";
import { truncateText } from "../../../../utility/truncateText";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: "card",
      data: recipe,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={
        isDragging ? styles["propertyCard-dragging"] : styles["propertyCard"]
      }
    >
      <Link to={`/detail/${recipe.id}`}>
        <div className={styles.propertyImage}>
          <img className={styles.cardImage} src={recipe.image} alt=""></img>
        </div>
      </Link>
      <div className={styles.propertyDescription}>
        <p> {truncateText(recipe.name, 22)}</p>
        <div className={styles.buttonHolder}>
          <p>
            <strong>{parseInt(recipe.calory / recipe.service)} kcal</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
