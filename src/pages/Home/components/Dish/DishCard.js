import styles from "./_dish.module.scss";
import Slide from "react-reveal/Slide";

function DishCard({ img, title, desc }) {
  return (
    <Slide duration={1500} bottom>
      <div className={`${styles.dishCard} dishCard`}>
        <img src={img} alt="dish" />
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </Slide>
  );
}

export default DishCard;
