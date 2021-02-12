import React, { useState, useContext, useEffect } from "react";
import styles from "./UserInfo.module.css";
import { bmrData } from "../../../utility/BMR";
import { AuthContext } from "../../../utility/AuthContext";
import { userInfoUpdater } from "../../../utility/userInfoUpdater";
import { getUserInfo } from "../../../utility/getUserInfo";

export const UserInfo = () => {
  const { currentUser, bioData, setBioData } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");
  const [userData, setUserData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const [dbData, setDbData] = useState({});

  //componentdidmount -> getUserInfo -> firebase data cek -> setUserData(data)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const myData = await getUserInfo(userId).then((res) => res);
    setDbData(myData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUserData({ ...userData, [name]: value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log("USERDATA: ", userData);
    if (!isFormValid()) {
      return;
    }
    const { weight, height, age, gender, pal } = userData;
    setIsChanged(true);
    setBioData(bmrData(weight, height, age, gender, pal));
    const updateData = { weight, height, age, gender, pal };
    userInfoUpdater(updateData, userId);
  };

  const isFormValid = () => {
    const { weight, height, age, gender, pal } = userData;
    return (
      weight > 10 &&
      weight < 300 &&
      height > 50 &&
      height < 250 &&
      age > 0 &&
      age < 120 &&
      gender !== "Select" &&
      pal !== "Select"
    );
  };
  console.log("DATTTAAAA:", dbData);
  return (
    <>
      {dbData ? (
        <div className={styles.prevUserInfo}>
          <div className={styles.prevHeading}>
            <h2>Your Info:</h2>
          </div>
          <div className={styles.infoPart}>
            Weight(kg):
            <span className={styles.infoText}>{dbData.weight}</span>
          </div>
          <div className={styles.infoPart}>
            Height(cm):
            <span className={styles.infoText}>{dbData.height}</span>
          </div>
          <div className={styles.infoPart}>
            Age:
            <span className={styles.infoText}>{dbData.age}</span>
          </div>
          <div className={styles.infoPart}>
            Gender:
            <span className={styles.infoText}>{dbData.gender}</span>
          </div>
          <div className={styles.palContainer}>
            Physical Activity Level:
            <div className={styles.palText}>
              {console.log("paldatadb:", dbData.pal)}
              {dbData.pal === "1"
                ? "Little / No Excercise (sedentary lifestyle)"
                : dbData.pal === "2"
                ? "Light Exercise (1 - 2 times a week)"
                : dbData.pal === "3"
                ? "Little / No Excercise (sedentary lifestyle)"
                : dbData.pal === "4"
                ? "Moderate Exercise (2 - 3 times a week)"
                : dbData.pal === "5"
                ? "Hard Exercise (4 - 5 times a week)"
                : "Physical Job or Hard Exercise (6 - 7 times a week)"}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div id="form_container" className={styles.formContainer}>
        <form id="form_14697" className="appnitro" onSubmit={formHandler}>
          <div className="form_description">
            {isChanged ? (
              <h2 className={styles.settingsUpdate}>
                Your BMR settings updated
              </h2>
            ) : (
              ""
            )}
            <h2>User Info</h2>
            <p>You can set your info in this form.</p>
          </div>
          <label className="description" htmlFor="weight">
            Weight (kg)
          </label>
          <div>
            <input
              id="weight"
              name="weight"
              className="element text medium"
              type="number"
              onChange={handleChange}
            />
          </div>
          <label className="description" htmlFor="height">
            Height (cm)
          </label>
          <div>
            <input
              id="height"
              name="height"
              className="element text medium"
              type="number"
              onChange={handleChange}
            />
          </div>
          <label className="description" htmlFor="age">
            Age
          </label>
          <div>
            <input
              id="age"
              name="age"
              className="element text medium"
              type="number"
              onChange={handleChange}
            />
          </div>
          <label className="description" htmlFor="gender">
            Gender
          </label>
          <div>
            <select
              className="element select medium"
              id="gender"
              name="gender"
              onChange={handleChange}
            >
              <option defaultValue="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <label className="description" htmlFor="pal">
            Physical Activity Level
          </label>
          <div>
            <select
              className="element select large"
              id="pal"
              name="pal"
              onChange={handleChange}
            >
              <option defaultValue="select">Select</option>
              <option value="1">
                Little / No Excercise (sedentary lifestyle)
              </option>
              <option value="2">Light Exercise (1 - 2 times a week)</option>
              <option value="3">Moderate Exercise (2 - 3 times a week)</option>
              <option value="4">Hard Exercise (4 - 5 times a week)</option>
              <option value="5">
                Physical Job or Hard Exercise (6 - 7 times a week)
              </option>
              <option value="6">Proffessional Athlete</option>
            </select>
          </div>
          <input type="hidden" name="form_id" value="14697" />
          <input
            className="button_text"
            type="submit"
            name="submit"
            value="Submit"
            disabled={!isFormValid()}
          />
        </form>
      </div>
    </>
  );
};

export default UserInfo;
