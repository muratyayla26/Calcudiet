import { db } from "./firestore";
// parametre olarak userData getir.
export const userInfoUpdater = (
	weight,
	height,
	age,
	gender,
	pal,
	currentUser
) => {
	db.collection("user").add({
		weight,
		height,
		age,
		gender,
		pal,
		ownerId: currentUser.uid,
	});
};
