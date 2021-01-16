
import styles from './_foodDataList.module.scss'
import like from '../../img/like.png'
import plate from '../../img/plate.png'
function FoodDataList({ data }) {
  console.log(data);
  return (
    <div className={styles.foodDataList}>
      <ul className={styles.cardContainer}>
        {data.map((i) => (
          <li className={styles.foodCard} key={i.recipe.label}>
              <div className={styles.cardHeader}>
                  <img className={styles.cardImg}src={i.recipe.image}></img>
                  <p className={styles.cardLabel}>{i.recipe.label}</p>
                  <div className={styles.cardOptions}>
                    <img className={styles.cardLike} src={like}/>
                    <img className={styles.cardAdd} src={plate}/>
                  </div>
              </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default FoodDataList;
