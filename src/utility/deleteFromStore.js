//this function is used to delete data from firestore
//if function returns true, it means that data is deleted from the firestore successfully
//if function returns false, it means that an error about firestore or connection
//function parameters are recipeId and userId
import { db } from "./firestore";

export const deleteFromStore = async (recipeId, ownerId) => {
  let checker = false;
  try {
    await db
      .collection("recipe")
      .where("id", "==", `${recipeId}`)
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          doc.ref.delete();
        });
      });
    checker = true;
  } catch (e) {
    console.log(e.message);
  }
  return checker;
};
