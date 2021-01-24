import foods from "../../img/foods.png";
import styles from "./_about.module.scss";

function About() {
  return (
    <div className={styles.container}>
      <div className={`${styles.aboutContainer}`}>
        <img src={foods} alt="food" />
        <h2 className={`${styles.aboutHeader} home-about-head`}>About Us</h2>
        <p className="home-about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
