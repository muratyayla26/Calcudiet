//this function checks whether data is already added to store or not
//if function returns true it means that data is already added to the firestore
//if function returns false it means that data isn't added to the firestore
import { db } from "./firestore";

export const alreadyAddedChecker = async (recipe, ownerId) => {
  let checker = false;
  try {
    const id = recipe.uri.split("_")[1];
    await db
      .collection("recipe")
      .where("id", "==", `${id}`)
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((response) => {
        return response.docs[0].data();
      });
    checker = true;
  } catch (error) {
    //console.log("data couldn't found");
  }
  return checker;
};
