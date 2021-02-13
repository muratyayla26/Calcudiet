import React, { useState, useEffect } from "react";
import styles from "./singleDay.module.css";
import { useDrop } from "react-dnd";
import ProgressBar from "@ramonak/react-progress-bar";
import { truncateText } from "../../../../utility/truncateText";

const ItemTypes = {
  CARD: "card",
};

const SingleDay = ({ data, setData, userCalory }) => {
  // eslint-disable-next-line no-unused-vars
  const [totalCal, setTotalCal] = useState(0);
  const [recCache, setRecCache] = useState({});
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => setRecCache(item.data),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  useEffect(() => {
    if (recCache.name) {
      setData((prev) => {
        return prev.map((prevIn) => {
          if (prevIn.day === data.day) {
            return {
              ...data,
              recipes: [...data.recipes, recCache],
              calory:
                data.calory + parseInt(recCache.calory / recCache.service),
            };
          } else {
            return prevIn;
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recCache]);

  const handlerRemove = (removedName) => {
    setData((prev) => {
      return prev.map((prevIn) => {
        if (prevIn.day === data.day) {
          let holder = 0;
          data.recipes.forEach((recipe) => {
            if (recipe.name === removedName) {
              holder = parseInt(recipe.calory / recipe.service);
            }
          });
          return {
            ...data,
            recipes: data.recipes.filter(
              (recipe) => recipe.name !== removedName,
            ),
            calory: data.calory - holder,
          };
        } else {
          return prevIn;
        }
      });
    });
  };

  const barPercent = parseInt((data.calory / userCalory) * 100);
  return (
    <div
      ref={drop}
      className={
        isOver
          ? styles["singleday-container-over"]
          : styles["singleday-container"]
      }
    >
      <p>{data.day}</p>
      {data.recipes.map((recipe, i) => {
        return (
          <div key={i} className={styles.nameHolder}>
            <div className={styles.recipeName}>
              {truncateText(recipe.name, 23)}
            </div>
            <span
              onClick={() => handlerRemove(recipe.name)}
              className={styles.removeRecipe}
            >
              X
            </span>
          </div>
        );
      })}
      <div className={styles.bottomInfo}>
        {data.calory > userCalory ? (
          <div style={{ color: "red", fontWeight: "500" }}>
            Daily calories exceeded!
          </div>
        ) : (
          <div>Total: {data.calory} kcal - per day</div>
        )}
        <div className={styles.progress}>
          <ProgressBar
            completed={barPercent}
            bgcolor={barPercent >= 100 ? "#ff0000" : "#30e839"}
            height="15px"
            borderRadius="20px"
            labelAlignment="left"
            baseBgColor="#ecec3d"
            labelColor="#030303"
            labelSize="8"
            margin="5px"
            padding="0"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleDay;
