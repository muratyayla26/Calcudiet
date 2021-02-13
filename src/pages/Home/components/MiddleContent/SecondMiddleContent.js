import styles from "./_middlecontent.module.scss";
import dietplate from "../../img/dietplate.png";
import Fade from "react-reveal/Fade";

function SecondMiddleContent() {
  return (
    <div className={styles.secMiddleContainer}>
      <h4 className={styles.middleheaderMobile}>You are what you eat</h4>
      <img className={styles.secMidImg} src={dietplate} alt="apple" />
      <div className={`${styles.secTextContainer} textContainer`}>
        <Fade duration={3000}>
          <h4 className={styles.middleheader}>You are what you eat</h4>
          <p className={styles.secMidParagraph}>
            Our bodies contain similar nutrients to the food we eat. Therefore,
            depending on what kind of food we are consuming and the contents of
            that food, we are affecting our nutrient levels and over all, our
            health.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default SecondMiddleContent;
