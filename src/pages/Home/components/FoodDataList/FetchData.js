import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import FoodDataList from "./FoodDataList";
import styles from "./_foodDataList.module.scss";

function FetchData() {
  const [data, setData] = useState();

  const fetch = (food, e) => {
    const key = process.env.REACT_APP_EDAMAM_KEY;
    const appid = process.env.REACT_APP_EDAMAM_ID;
    e.preventDefault();
    if (food !== "")
      axios
        .get(
          `https://api.edamam.com/search?q=${food}&app_id=${appid}&app_key=${key}&from=0&to=4&calories=591-722&health=alcohol-free`
        )
        .then((res) => setData(res.data.hits));
  };

  return (
    <div>
      <SearchBar fetch={fetch} />

      {data ? (
        <FoodDataList data={data} />
      ) : (
        <div className={styles.mainParagraphContainer}>
          <p className={styles.mainParagraph}>
            What we eat and how we eat it is both a pleasure and an art. We have
            access to a wider variety and quality of food and drinks that our
            grandparents could only have dreamt of. However, with our hectic
            modern lives, people may experience a lack of balance in how much
            they consume, affecting the quality of their health and lifestyles.
          </p>
        </div>
      )}
    </div>
  );
}

export default FetchData;
