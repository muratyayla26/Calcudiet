import React , {useState} from "react";
import styles from "./calendar.module.css";
import SingleDay from "../SingleDay";
const Calendar = () => {;
    const [data, setData] = useState([
        {day:"Sun", recipes:[], calory:0},
        {day:"Mon", recipes:[], calory:0},
        {day:"Tue", recipes:[], calory:0},
        {day:"Wed", recipes:[], calory:0},
        {day:"Thu", recipes:[], calory:0},
        {day:"Fri", recipes:[], calory:0},
        {day:"Sat", recipes:[], calory:0},
    ]);
    console.log(data);
    return (
        <div className={styles["calendar-container"]}>
            {
                data.map( data => {
                    return <SingleDay key={Math.random()*100} data={data} setData={setData}/>
                })
            }
            
        </div>
    )
}

export default Calendar;