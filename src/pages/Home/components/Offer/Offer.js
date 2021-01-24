import React from "react";
import styles from "./_offer.module.scss";
import OfferTable from "./OfferTable";

function Offer({ offers, setSelect }) {
  console.log(offers);
  return (
    <div className={styles.offerContainer}>
      <h2>Our Offers</h2>
      <div className={styles.offerOptions}>
        <p onClick={() => setSelect("soup")}>Soups</p>
        <p onClick={() => setSelect("salad")}>Salads</p>
        <p onClick={() => setSelect("desert")}>Desserts</p>
        <p onClick={() => setSelect("seafood")}>Seafoods</p>
      </div>

      <div className={styles.offerTableContainer}>
        <table>
          <thead>
            <tr>
              <th>Food</th>
              <th>
                Calorie <span>kcal</span>
              </th>
              <th>
                Fat <span>g</span>
              </th>
              <th>
                Protein <span>g</span>
              </th>
              <th>
                Sugar <span>g</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((item) => (
              <OfferTable key={item.recipe.label} offer={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Offer;
