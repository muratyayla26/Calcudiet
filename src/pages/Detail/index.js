import { search } from "./utility/edamam";
import { useState, useEffect } from "react";
import styles from "./styles/index.module.scss";
import General from "./components/General/General";
import { infos } from "./utility/temporary";
import Ingredients from "./components/Ingredients/Ingredients";
import Nutrition from "./components/Nutrition/Nutrition";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Detail = () => {
  const [recipe, setRecipe] = useState(infos);
  const [loading, setLoading] = useState(false);
  console.log("index render oldu");
  /*
  useEffect(() => {
    search("75e4ca97121992820cc6e246bd16b866").then((response) => {
      setRecipe(response);
      setLoading(false);
    });
  }, []);
*/
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <Loader type="Oval" color="#000" height={40} width={40} />
        </div>
      ) : (
        <div className={styles.container}>
          <General recipe={recipe} />
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
