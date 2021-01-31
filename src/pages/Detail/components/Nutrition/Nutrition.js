import styles from "./nutrition.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import NutritionLine from "../NutritionLine/NutritionLine";

const Nutrition = ({ calories, service, cautions, digest }) => {
  const [serviceHolder, setServiceHolder] = useState(service);
  const [newService, setNewService] = useState(service);
  const [inputError, setinputError] = useState(false);

  const changeHandler = (e) => {
    setServiceHolder(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.service.value > 0 && e.target.service.value < 50) {
      setNewService(e.target.service.value);
      inputError && setinputError(false);
    } else {
      setinputError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <p className={styles.header}>Nutrition</p>
      </div>
      <hr className={styles["top-hr"]} />
      <div className={styles["calory-container"]}>
        <div className={styles["calory-serving"]}>
          <p>Recommended Servings</p>
          <form onSubmit={submitHandler}>
            <input
              className={inputError ? styles["error-input"] : undefined}
              name="service"
              onChange={changeHandler}
              value={serviceHolder}
            />
            <button type="submit">Set</button>
          </form>
          {inputError && (
            <p className={styles["error-message"]}>
              value must be between 1-50
            </p>
          )}
        </div>
        <div className={styles["calory-calory"]}>
          <p>Calories/Serving</p>
          <p>{Math.ceil(Math.ceil(calories) / newService)}</p>
        </div>
      </div>
      <hr className={styles["special-hr"]} />
      <div>
        {cautions.length !== 0 && cautions[0] !== "FODMAP" && cautions[0] && (
          <div>
            <div className={styles["allergic-container"]}>
              <FontAwesomeIcon
                className={styles["faIcon"]}
                icon={faExclamationCircle}
              />
              <p>Allergen: {cautions}</p>
            </div>
            <hr className={styles["bottom-hr"]} />
          </div>
        )}
      </div>
      {digest.map((item, index) => {
        return (
          <NutritionLine key={index} item={item} newService={newService} />
        );
      })}
      <hr />
    </div>
  );
};

export default Nutrition;
