import React from "react";
import styles from "./RecipeCard.module.css";
import { useDrag } from "react-dnd";
import { truncateText } from "../../../../utility/truncateText";

const ItemTypes = {
  CARD: "card",
};

const RecipeCard = ({ recipe }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
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
      <div className={styles.propertyImage}>
        <img className={styles.cardImage} src={recipe.image} alt=""></img>
      </div>

      <div className={styles.propertyDescription}>
        <p> {truncateText(recipe.name, 22)}</p>
        <div className={styles.buttonHolder}>
          <p>
            <strong>{parseInt(recipe.calory / recipe.service)} kcal</strong>
          </p>

          <button>
            <p> X</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
