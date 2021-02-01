import React, { useEffect } from "react";
import styles from "./SearchBar.module.scss";
import { fetchData } from "../FetchData";
import { useHistory } from "react-router-dom";

const SearchBar = ({ setRecipe, searchKey }) => {
  let history = useHistory();

  useEffect(() => {
    if (searchKey) {
      fetchData(searchKey).then((response) => {
        setRecipe(response);
      });
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData(e.target.query.value).then((response) => {
      setRecipe(response);
      history.push(`/search?q=${e.target.query.value}`);
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
