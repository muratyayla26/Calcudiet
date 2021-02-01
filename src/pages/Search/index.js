import SearchBar from "./components/SearchBar/SearchBar.js";
import styles from "./index.module.scss";
import SearchDetails from "./components/SearchDetails/SearchDetails.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [recipe, setRecipe] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [loading, setLoading] = useState(true);
  const searchKeyHolder = useLocation().search.split("=");

  useEffect(() => {
    setSearchKey(searchKeyHolder[1]);
    setLoading(false);
  }, [recipe]);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1 className={styles.header}>SearcPage</h1>
          <SearchBar searchKey={searchKey} setRecipe={setRecipe} />
          <div>
            {recipe ? (
              <SearchDetails recipe={recipe} searchKey={searchKey} />
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
