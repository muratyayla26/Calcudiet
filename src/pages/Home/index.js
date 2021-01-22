import styles from "./styles/_index.module.scss";
import "./styles/animate.css";
import FetchData from "./components/FoodDataList/FetchData";
import SideContent from "./components/SideContent/SideContent";
import About from "./components/About/About";
import DishContainer from "./components/Dish/DishContainer";
import MiddleContent from "./components/MiddleContent/MiddleContent"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <FetchData />
        <SideContent />
      </div>
      <About />
      <DishContainer/>
      <MiddleContent/>
    </div>
  );
};

export default Home;
