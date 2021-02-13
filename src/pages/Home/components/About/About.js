import foods from "../../img/foods.png";
import styles from "./_about.module.scss";

function About() {
  return (
    <div className={styles.container}>
      <div className={`${styles.aboutContainer}`}>
        <img src={foods} alt="food" />
        <h2 className={`${styles.aboutHeader} home-about-head`}>About Us</h2>
        <p className="home-about-paragraph">
          The fresh-tasting, innovative recipes in Calcudiet shows how eating
          well from a rainbow variety of plant foods every day gives your body
          all the essential nutrients it needs to live well.
        </p>
      </div>
    </div>
  );
}

export default About;
