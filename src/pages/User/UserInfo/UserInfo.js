import React, { useState, useContext, useEffect } from "react";
import styles from "./UserInfo.module.scss";
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
    const { calories } = bmrData(weight, height, age, gender, pal);
    const updateData = { weight, height, age, gender, pal, calories };
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

  return (
    <>
      {dbData ? (
        <div className={styles.infoContainer}>
          <div className={styles.form}>
            <h2>Your Info:</h2>
          </div>
          <div className={styles.infoPart}>
            <p>Weight(kg):</p>
            <p className={styles.infoText}>{dbData.weight}</p>
          </div>
          <div className={styles.infoPart}>
            <p>Height(cm):</p>
            <p className={styles.infoText}>{dbData.height}</p>
          </div>
          <div className={styles.infoPart}>
            <p>Age:</p>
            <p className={styles.infoText}>{dbData.age}</p>
          </div>
          <div className={styles.infoPart}>
            <p>Gender:</p>
            <p className={styles.infoText}>{dbData.gender}</p>
          </div>
          <div className={styles.palContainer}>
            <p>Physical Activity Level:</p>
            <div className={styles.palText}>
              <p>
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
              </p>
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
            <h2>Set User Info</h2>
            <p>You can set your info in this form.</p>
          </div>
          <div>
            <input
              id="weight"
              name="weight"
              type="number"
              placeholder="Weight (cm)"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="height"
              name="height"
              type="number"
              placeholder="Height (cm)"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Age"
              onChange={handleChange}
            />
          </div>
          <div>
            <select id="gender" name="gender" onChange={handleChange}>
              <option defaultValue="select">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <select id="pal" name="pal" onChange={handleChange}>
              <option defaultValue="select">Physical Activity Level</option>
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
