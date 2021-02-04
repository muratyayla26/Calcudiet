import { addToStore } from "../../../../utility/addToStore";
import styles from "./general.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../../../utility/AuthContext";
import { useContext } from "react";
import Popup from "reactjs-popup";

const General = ({ recipe, alreadyAdded, setAlreadyAdded }) => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");

  const clickHandler = () => {
    if (userId) {
      if (alreadyAdded) {
        setAlreadyAdded(!alreadyAdded);
        let recipeId = recipe.uri.split("_")[1];
        deleteFromStore(recipeId, userId).then((res) => {
          console.log("veri basariyla silindi");
        });
      } else {
        addToStore(recipe, userId).then((res) => {
          if (res) {
            setAlreadyAdded(!alreadyAdded);
            console.log("veri stora eklendi");
          } else {
            console.log("baglanti hatasi");
          }
        });
      }
    } else {
      console.log("user olmadigi icin stora eklenmemedi");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src={recipe.image} alt="meal" />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles.name}>{recipe.label}</p>
        <div className={styles.footer}>
          {userId ? (
            <div className={styles["add-list-container"]}>
              {alreadyAdded ? (
                <div onClick={clickHandler} className={styles["add-list"]}>
                  <span>Remove From Your</span>
                  <FontAwesomeIcon
                    className={styles["faIcon"]}
                    icon={faListUl}
                  />
                </div>
              ) : (
                <div onClick={clickHandler} className={styles["add-list"]}>
                  <span>Add To Your</span>
                  <FontAwesomeIcon
                    className={styles["faIcon"]}
                    icon={faListUl}
                  />
                </div>
              )}
            </div>
          ) : (
            <Popup
              trigger={
                <div className={styles["add-list"]}>
                  <span>Add To Your</span>
                  <FontAwesomeIcon
                    className={styles["faIcon"]}
                    icon={faListUl}
                  />
                </div>
              }
              position="top center"
            >
              <p>Please login or sign up.</p>
            </Popup>
          )}
          <a
            href={recipe.url}
            rel="noreferrer"
            target="_blank"
            className={styles["see-instructions"]}
          >
            <span>Full Instructions</span>
            <FontAwesomeIcon className={styles["faIcon"]} icon={faUtensils} />
          </a>
          <div className={styles["share-container"]}>
            <FontAwesomeIcon className={styles["faShare"]} icon={faShareAlt} />
            <FontAwesomeIcon
              className={styles["faIcon"]}
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              className={styles["faIcon"]}
              icon={faTwitterSquare}
            />
            <FontAwesomeIcon
              className={styles["faIcon"]}
              icon={faYoutubeSquare}
            />
            <FontAwesomeIcon
              className={styles["faIcon"]}
              icon={faWhatsappSquare}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
