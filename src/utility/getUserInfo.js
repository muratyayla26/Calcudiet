//this functions returns user's calory and BMR infos
import { db } from "./firestore";

export const getUserInfo = async (ownerId) => {
  let isExist = false;
  let output = {};
  try {
    await db
      .collection("user")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        output = res.docs[0].data();
      });
    isExist = true;
    return output;
  } catch (error) {
    return (output = { calories: 1 });
  }
};
