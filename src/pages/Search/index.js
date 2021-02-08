import SearchBar from "./components/SearchBar/SearchBar.js";
import styles from "./index.module.scss";
import SearchDetails from "./components/SearchDetails/SearchDetails.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  let query = useQuery();
  const [recipe, setRecipe] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState({ from: 0, to: 35 });

  useEffect(() => {
    const queryKeyword = query.get("q");
    setSearchKey(queryKeyword);
    setLoading(false);
  }, [recipe]);

  return (
    <div>
      {loading ? (
        <div className={styles["spinner-container"]}>
          <FontAwesomeIcon
            className={styles["faSpinner"]}
            icon={faCircleNotch}
            spin
          />
        </div>
      ) : (
        <div>
          <h1 className={styles.header}>SearcPage</h1>
          <SearchBar
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            recipe={recipe}
            setRecipe={setRecipe}
            range={range}
            setRange={setRange}
          />
          <div>
            {recipe ? (
              <SearchDetails
                recipe={recipe}
                searchKey={searchKey}
                setRange={setRange}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
