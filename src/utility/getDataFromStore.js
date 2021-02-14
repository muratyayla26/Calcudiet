//this function returns all datas of a user
//function parameter is only userId
import { db } from "./firestore";

export const getDataFromStore = async (ownerId) => {
  try {
    const holder = [];
    await db
      .collection("recipe")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          holder.push(doc.data());
        });
      });
    return holder;
  } catch (e) {
    console.log(e.message);
  }
};
