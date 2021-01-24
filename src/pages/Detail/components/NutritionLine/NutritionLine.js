import styles from "./nutritionLine.module.scss";

const NutritionLine = ({ item, newService }) => {
  return (
    <div className={styles["line-container"]}>
      <p>{item.label}</p>
      <p>{`${Math.ceil((Math.ceil(item.total) || 0) / newService)} ${
        item.unit
      }`}</p>
    </div>
  );
};

export default NutritionLine;
