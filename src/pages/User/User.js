import { AuthContext } from "../../utility/AuthContext";
import { useContext, useEffect, useState } from "react";
import { getDataFromStore } from "../../utility/getDataFromStore";
import RecipeList from "./components/RecipeList/RecipeList";
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import styles from "./User.module.css"
import Calendar from "./components/Calendar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
const User = () => {
	const { currentUser } = useContext(AuthContext);
	const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		getDataFromStore(userId).then((res) => {
			setData(res);
			setLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return loading ? (
		<div className={styles["spinner-container"]}>
          <FontAwesomeIcon
            className={styles["faSpinner"]}
            icon={faCircleNotch}
            spin
          />
        </div>
	) : (
		<DndProvider backend={HTML5Backend}>
			<div style={{display: "flex"}}>
				<div className={styles.container}>
					<RecipeList recipes={data} currentUser={currentUser} />
				</div>
				<Calendar />
			</div>
		</DndProvider>
		
	);
};

export default User;
