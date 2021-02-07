import React from "react";
import styles from "./SearchDetails.module.scss";
import FoodCard from "../FoodCard/FoodCard.js";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchDetails({ recipe, setRange }) {
  console.log(recipe.length, "recipenin uzunlugu");

  const handleInfinite = () => {
    console.log("en alttayim");
    setRange((prev) => {
      return { from: prev.from + 30, to: prev.to + 30 };
    });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={recipe.length}
        next={() => handleInfinite()}
        hasMore={true}
        className={styles.Details}
        scrollThreshold={1}
      >
        {recipe.map((item, index) => {
          return <FoodCard recipe={item.recipe} key={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default SearchDetails;
