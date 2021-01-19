import styles from "./_sideContent.module.scss";
import main from "../../img/main.png";

function SideContent() {
  return (
    <div className={styles.sideContent}>
      <h1 className={styles.mainHeader}>Eat well, live well</h1>
      <img className={styles.mainImg} src={main} alt="mainimage"></img>
    </div>
  );
}

export default SideContent;
