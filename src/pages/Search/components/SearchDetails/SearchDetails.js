import React from "react";
import styles from "./SearchDetails.module.scss";
import FoodCard from "../FoodCard/FoodCard.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function SearchDetails({ recipe, setRange, searchKey }) {
  const handleInfinite = () => {
    setRange((prev) => {
      return { from: prev.from + 37, to: prev.to + 37 };
    });
  };

  return (
    <>
      <InfiniteScroll
        dataLength={recipe.length}
        next={() => handleInfinite()}
        hasMore={recipe.length >= 96 ? false : true}
        scrollThreshold={1}
        endMessage={
          <p className={styles["end-message"]}>You have seen it all :)</p>
        }
        loader={
          searchKey && (
            <div className={styles["spinner-container"]}>
              <FontAwesomeIcon
                className={styles["faSpinner"]}
                icon={faCircleNotch}
                spin
              />
            </div>
          )
        }
      >
        <div className={styles.Details}>
          {recipe.map((item, index) => {
            return <FoodCard recipe={item.recipe} key={index} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default SearchDetails;
