import React from "react";
import styles from "./FoodCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FoodCard({ recipe }) {
  return (
    <div className={styles.container}>
      <div className={styles.FoodCard}>
        <div className={styles.img}>
          <img alt="" src={recipe.image} />
        </div>
        <div className={styles.p1}>
          {" "}
          <p>{recipe.label}</p>
        </div>

        <div className={styles.info}>
          <p className={styles.p2}>
            {parseInt(recipe.calories)}
            <span> Calories</span>
          </p>
          <div className={styles.icon}>
            <FontAwesomeIcon className={styles["Heart"]} icon={faHeart} />{" "}
            <Link to={`/detail/${recipe.uri.split("_")[1]}`}>
              <FontAwesomeIcon
                className={styles["Utensils"]}
                icon={faUtensils}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
