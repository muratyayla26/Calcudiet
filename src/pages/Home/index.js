import styles from "./styles/_index.module.scss";
import FetchData from "./components/FoodDataList/FetchData";
import SideContent from "./components/SideContent/SideContent";
import About from "./components/About/About";
import DishContainer from "./components/Dish/DishContainer";
import MiddleContent from "./components/MiddleContent/MiddleContent";
import SecondMiddleContent from "./components/MiddleContent/SecondMiddleContent";
import FetchOffers from "./components/Offer/FetchOffers";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <FetchData />
        <SideContent />
      </div>
      <About />
      <DishContainer />
      <MiddleContent />
      <SecondMiddleContent />
      <FetchOffers />
      <Contact />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
