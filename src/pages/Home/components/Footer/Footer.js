import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./_footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.address}>
        <div className={styles.contactContent}>
          <div className={styles.phone}>
            <p>Mobile: 0xxx xxx xxxx </p>
            <p>Phone: 3xx xx xx</p>
            <p>E-Mail: email@email.com</p>
          </div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
      </div>
    </div>
  );
}

export default Footer;
