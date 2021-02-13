import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./_footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.phone}>
        <div className={styles["names-footer-container"]}>
          <div className={styles["double-name-container"]}>
            <div className={styles["single-name-container"]}>
              <p>Ahmet Seha Açar</p>
              <a href="https://github.com/ahmetseha" target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </div>
            <div className={styles["single-name-container"]}>
              <a href="https://github.com/fyilmazy" target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
              <p>Fahrettin Yılmaz</p>
            </div>
          </div>
        </div>
        <div className={styles["names-footer-container"]}>
          <div className={styles["double-name-container"]}>
            <div className={styles["single-name-container"]}>
              <p>Hasan Elmacı</p>
              <a href="https://github.com/hasanelmaci" target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
            </div>
            <div className={styles["single-name-container"]}>
              <a href="https://github.com/muratyayla26" target="_blank">
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
              <p>Murat Yayla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
