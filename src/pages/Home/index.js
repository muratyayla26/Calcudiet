import styles from "./styles/_index.module.scss";
import './styles/animate.css'
import FetchData from "./components/FoodDataList/FetchData";
import SideContent from "./components/SideContent/SideContent";
import SearchBar from "./components/SearchBar/SearchBar";
import About from "./components/About/About"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <FetchData />
        <SideContent />
      </div>
      <About/>
      {/* <Articles/> */}

    </div>
  );
};

export default Home;
