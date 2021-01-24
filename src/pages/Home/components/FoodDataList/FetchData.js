import { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import FoodDataList from "./FoodDataList";
import styles from "./_foodDataList.module.scss";

function FetchData() {
  const [data, setData] = useState();

  const fetch = (food, e) => {
    const key = process.env.REACT_APP_KEY;
    const appid = process.env.REACT_APP_APPID;
    e.preventDefault();
    if (food != "")
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )}
    </div>
  );
}

export default FetchData;
