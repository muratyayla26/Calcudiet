//import db from "../../utility/firestore";
import { search } from "../../utility/edamam";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import General from "./components/General/General";
import { infos } from "./temporary";
import Ingredients from "./components/Ingredients/Ingredients";
import Nutrition from "./components/Nutrition/Nutrition";

const Detail = () => {
  const [recipe, setRecipe] = useState(infos);
  const [loading, setLoading] = useState(false);
/*
  useEffect(() => {
    search("f2033611488164ec5c41449a2450df2c").then((response) => {
      setRecipe(response);
      setLoading(false);
    });
  }, []);*/
  return (
    <div>
      {loading ? (
        <p>Loading</p>//loader gelecek
      ) : (
        <div className={styles.container}>
          <General id={recipe.id} image={recipe.image} name={recipe.name} url={recipe.url} />
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
      )}
    </div>
  );
};

export default Detail;
