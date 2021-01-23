import { search } from "./utility/edamam";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import styles from "./styles/index.module.scss";
import General from "./components/General/General";
import { infos } from "./utility/temporary";
import Ingredients from "./components/Ingredients/Ingredients";
import Nutrition from "./components/Nutrition/Nutrition";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Detail = () => {
  const { params } = useRouteMatch();
  console.log(params.id);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search(params.id).then((response) => {
      console.log(response);
      setRecipe(response);
      setLoading(false);
    });
  }, []);

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
            <Ingredients
              ingredientLines={recipe.ingredientLines}
              url={recipe.url}
            />
            <Nutrition
              calories={recipe.calories}
              cautions={recipe.cautions}
              service={recipe.yield}
              digest={recipe.digest}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
/*
path="/detail/:id" bu yol app.jste route eklenecek
<Link to={`/detail/${itemin_apiden gelen_Idsi}`}> tıklanılacak yere link verilecek*/
