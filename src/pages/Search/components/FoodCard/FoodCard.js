import React, { useContext } from "react";
import styles from "./FoodCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../utility/AuthContext";
import { addToStore } from "../../../../utility/addToStore";

function FoodCard({ recipe }) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");
  const addToList = () => {
    if (userId) {
      addToStore(recipe, userId).then((response) => {
        if (response) {
          console.log("veri store eklendi");
        } else {
          console.log("veri eklenmedi");
        }
      });
    } else {
      console.log("giriş yapılmadığı için veri eklenmedi");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.FoodCard}>
        <Link to={`/detail/${recipe.uri.split("_")[1]}`}>
          <div className={styles.img}>
            <img alt="" src={recipe.image} />
          </div>
        </Link>
        <div className={styles.foodName}>
          <p>{recipe.label}</p>
        </div>

        <div className={styles.info}>
          <p className={styles.calori}>
            {parseInt(recipe.calories)}
            <span> Calories</span>
          </p>
          <div className={styles.icon}>
            <FontAwesomeIcon
              onClick={addToList}
              className={styles["Heart"]}
              icon={faHeart}
            />
            <Link to={`/detail/${recipe.uri.split("_")[1]}`}></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
