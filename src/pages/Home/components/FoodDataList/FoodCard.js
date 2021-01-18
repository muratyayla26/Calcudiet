import styles from "./_foodDataList.module.scss";
import like from "../../img/like.png";
import plate from "../../img/plate.png";

function FoodCard({ data }) {
  return (
    <li className={styles.foodCard}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImg} src={data.recipe.image}></img>
        <p className={styles.cardLabel}>{data.recipe.label}</p>
        <div className={styles.cardOptions}>
          <img className={styles.cardLike} src={like} />
          <img className={styles.cardAdd} src={plate} />
        </div>
      </div>
    </li>
  );
}

export default FoodCard;
