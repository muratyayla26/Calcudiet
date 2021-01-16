import styles from "./_index.module.scss";
import FetchData from "./components/FoodDataList/FetchData";
import SideContent from "./components/SideContent/SideContent";
import SearchBar from "./components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <FetchData />
        <SideContent />
      </div>
    </div>
  );
};

export default Home;
