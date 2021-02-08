import React, { useEffect } from "react";
import styles from "./SearchBar.module.scss";
import { fetchData } from "../FetchData";
import { useHistory } from "react-router-dom";

const SearchBar = ({
  recipe,
  setRecipe,
  searchKey,
  range,
  setRange,
  setSearchKey,
}) => {
  let history = useHistory();

  useEffect(() => {
    if ((searchKey && range.from > 0) || (searchKey && recipe.length === 0)) {
      fetchData(searchKey, range.from, range.to).then((response) => {
        setRecipe((prev) => {
          return [...prev, ...response];
        });
      });
    }
  }, [range]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (recipe.length > 0) {
      fetchData(e.target.query.value, 0, 35).then((response) => {
        setRecipe(response);
        history.push(`/search?q=${e.target.query.value}`);
        setSearchKey(e.target.query.value);
        setRange({ from: 0, to: 35 });
      });
      return;
    }
    fetchData(e.target.query.value, range.from, range.to).then((response) => {
      setRecipe(response);
      history.push(`/search?q=${e.target.query.value}`);
      setSearchKey(e.target.query.value);
    });
  };

  return (
    <div className={styles.SearchBar}>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          className={styles.input1}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" className={styles.input2} />
      </form>
    </div>
  );
};

export default SearchBar;
