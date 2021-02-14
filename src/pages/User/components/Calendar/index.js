import React, { useState, useContext, useEffect } from "react";
import styles from "./calendar.module.scss";
import SingleDay from "../SingleDay";
import { getUserInfo } from "../../../../utility/getUserInfo";
import { AuthContext } from "../../../../utility/AuthContext";

const Calendar = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");
  const [data, setData] = useState([
    { day: "Sun", recipes: [], calory: 0 },
    { day: "Mon", recipes: [], calory: 0 },
    { day: "Tue", recipes: [], calory: 0 },
    { day: "Wed", recipes: [], calory: 0 },
    { day: "Thu", recipes: [], calory: 0 },
    { day: "Fri", recipes: [], calory: 0 },
    { day: "Sat", recipes: [], calory: 0 },
  ]);
  const [userCalory, setUserCalory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserInfo(userId).then((res) => {
      setUserCalory(res.calories);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <div className={styles["calendar-container"]}>
          {data.map((data) => {
            return (
              <SingleDay
                userCalory={userCalory}
                key={Math.random() * 100}
                data={data}
                setData={setData}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Calendar;
