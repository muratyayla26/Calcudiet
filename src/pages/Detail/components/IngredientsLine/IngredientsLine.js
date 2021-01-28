import styles from "./ingredientsLine.module.scss";

const IngredientsLine = ({ item }) => {
  return (
    <div className={styles["line-container"]}>
      <p>{item}</p>
    </div>
  );
};

export default IngredientsLine;
