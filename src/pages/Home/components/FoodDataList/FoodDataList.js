import Popup from 'reactjs-popup';
import styles from './_foodDataList.module.scss'
import FoodCard from './FoodCard'
import like from '../../img/like.png'
import plate from '../../img/plate.png'




function FoodDataList({ data }) {
  console.log(data);
  return (
    <div className={styles.foodDataList}>
      <ul className={styles.cardContainer}>
      {data.map((item) => (




        <FoodCard  key={item.recipe.label} data={item}/>


))}
      </ul>
      
    </div>
  );
}

export default FoodDataList;
