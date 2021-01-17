//import db from "../../utility/firestore";
//import { search } from "../../utility/edamam";
import { useState } from "react";
import styles from "./index.module.scss";
import General from "./components/General/General";
import { infos } from "./temporary";
import Ingredients from "./components/Ingredients/Ingredients";
import Nutrition from "./components/Nutrition/Nutrition";
const Detail = () => {
  const [recipe, setRecipe] = useState(infos);

  return (
    <div className={styles.container}>
      <General image={recipe.image} name={recipe.name} url={recipe.url} />
      <div className={styles["sub-container"]}>
        <Ingredients ingredients={recipe.ingredients} url={recipe.url} />
        <Nutrition
          calory={recipe.calory}
          allergic={recipe.allergic}
          service={recipe.service}
          nutrition={recipe.nutrition}
        />
      </div>
    </div>
  );
};

export default Detail;
