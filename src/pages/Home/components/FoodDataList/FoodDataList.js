import styles from "./_foodDataList.module.scss";
import FoodCard from "./FoodCard";

function FoodDataList({ data }) {
  return (
    <div className={styles.foodDataList}>
      <ul className={styles.cardContainer}>
        {data.map((item) => (
          <FoodCard key={item.recipe.label} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default FoodDataList;
