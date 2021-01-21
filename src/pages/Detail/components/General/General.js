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
import { alreadyAddedChecker } from "../../../../utility/alreadyAddedChecker";

const General = ({ recipe }) => {
  const clickHandler = () => {
    addToStore(recipe);
  };

  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src={recipe.image} alt="meal" />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles.name}>{recipe.label}</p>
        <div className={styles.footer}>
          <div onClick={clickHandler} className={styles["add-list"]}>
            <span>Add To Your</span>
            <FontAwesomeIcon className={styles["faIcon"]} icon={faListUl} />
          </div>
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
