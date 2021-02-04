import { AuthContext } from "../../utility/AuthContext";
import { useContext, useEffect, useState } from "react";
import { getDataFromStore } from "../../utility/getDataFromStore";
import RecipeList from "./components/RecipeList/RecipeList";
//
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
		<div>Loading...</div>
	) : (
		<RecipeList recipes={data} currentUser={currentUser} />
	);
};

export default User;
