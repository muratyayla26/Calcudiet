import styles from "./_middlecontent.module.scss";
import apple from "../../img/apple.png";
import Fade from "react-reveal/Fade";

function MiddleContent() {
  return (
    <div className={styles.middleContainer}>
      <div className={`${styles.textContainer} textContainer`}>
        <Fade duration={3000}>
          <h4 className={styles.middleheader}>Stay healthy stay fit</h4>
          <p>
            Healthy diet is rich in fiber, whole grains, fresh fruits and
            vegetables, "good" or unsaturated fats, and omega-3 fatty acids.
            These dietary components turn down inflammation, which can damage
            tissue, joints, artery walls, and organs.{" "}
          </p>
        </Fade>
      </div>
      <img className={styles.midImg} src={apple} alt="apple" />
      <h4 className={styles.middleheaderMobile}>Stay healthy stay fit</h4>
    </div>
  );
}

export default MiddleContent;
