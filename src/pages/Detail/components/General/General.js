import styles from "./general.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

const General = ({ image, name, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles["img-container"]}>
        <img src={image} alt="meal" />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles.name}>{name}</p>
        <div className={styles.footer}>
          <div className={styles["add-list"]}>
            <span>Add To Your</span>
            <FontAwesomeIcon className={styles["faIcon"]} icon={faListUl} />
          </div>
          <a
            href={url}
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
