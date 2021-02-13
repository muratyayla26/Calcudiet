import { useEffect, useState, useContext } from "react";
import Popup from "reactjs-popup";
import styles from "./_foodDataList.module.scss";
import "../Popups/homefoodpopup.css";
import { Link } from "react-router-dom";
import { addToStore } from "../../../../utility/addToStore";
import { AuthContext } from "../../../../utility/AuthContext";

function FoodCard({ data }) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");
  const [url, setUrl] = useState(null);
  const [addListMessage, setAddListMessage] = useState("");

  //get every string after underline _
  useEffect(() => {
    const longUrl = data.recipe.uri;
    const url = longUrl.split("_")[1];
    setUrl(url);
  }, [setUrl, data.recipe.uri]);

  const addToList = () => {
    if (userId) {
      addToStore(data.recipe, userId).then((res) => {
        if (res) {
          console.log("veri stora eklendi");
          setAddListMessage("Added");
        } else {
          console.log("user var ancak veri daha once eklenmis");
          setAddListMessage("Already added");
        }
      });
    } else {
      setAddListMessage("Please login or sign up.");
      console.log("user olmadigi icin stora eklenmemedi");
    }
  };

  return (
    <li className={styles.foodCard}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImg} src={data.recipe.image} alt="foods" />
        <p className={styles.cardLabel}>{data.recipe.label}</p>
        <div className={styles.cardOptions}>
          <Popup
            trigger={
              <button className="button home-trigger-btn"> Details</button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">
                  {" "}
                  <h2>{data.recipe.label}</h2>{" "}
                </div>
                <div className="content">
                  {" "}
                  <img src={data.recipe.image} alt="food" />
                  <p>
                    <span>Calories:</span> {parseInt(data.recipe.calories)}kcal
                  </p>
                  <p>
                    <span>Fat:</span>{" "}
                    {parseInt(data.recipe.totalNutrients.FAT.quantity)}g
                  </p>
                  <p>
                    <span>Sugar:</span>{" "}
                    {parseInt(data.recipe.totalNutrients.SUGAR.quantity)}g
                  </p>
                  <p>
                    <span>Protein:</span>{" "}
                    {parseInt(data.recipe.totalNutrients.PROCNT.quantity)}g
                  </p>
                </div>
                <div className="actions">
                  <p className={styles.alreadyAddedList}>{addListMessage}</p>

                  <Link to={`/detail/${url}`}>
                    <button>See More</button>
                  </Link>
                  <button onClick={addToList}>Add to list</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </li>
  );
}

export default FoodCard;
