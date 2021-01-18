import styles from "./nutrition.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Nutrition = ({ calory, service, allergic, nutrition }) => {
  const [serviceHolder, setServiceHolder] = useState(service);
  const [newService, setNewService] = useState(service);

  const changeHandler = (e) => {
    setServiceHolder(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.service.value > 0) {
      setNewService(e.target.service.value);
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
          <p>Servings</p>
          <form onSubmit={submitHandler}>
            <input
              name="service"
              onChange={changeHandler}
              value={serviceHolder}
            />
          </form>
        </div>
        <div className={styles["calory-calory"]}>
          <p>Calories / Serving</p>
          <p>{Math.ceil(Math.ceil(calory) / newService)}</p>
        </div>
      </div>
      <hr className={styles["special-hr"]} />
      <div>
        {allergic && (
          <div>
            <div className={styles["allergic-container"]}>
              <FontAwesomeIcon
                className={styles["faIcon"]}
                icon={faExclamationCircle}
              />
              <p>Allergen: {allergic}</p>
            </div>
            <hr className={styles["bottom-hr"]} />
          </div>
        )}
      </div>
      {nutrition.map((item, index) => {
        return (
          <div key={index} className={styles["line-container"]}>
            <p>{item.label}</p>
            <p>{`${Math.ceil(Math.ceil(item.total) / newService)} ${
              item.unit
            }`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Nutrition;
