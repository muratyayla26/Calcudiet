import db from "./firestore";

export const alreadyAddedChecker = async (recipe) => {
  let checker = false;
  try {
    const id = recipe.uri.split("_")[1];
    await db
      .collection("recipe")
      .where("id", "==", `${id}`)
      .get()
      .then((response) => {
        return response.docs[0].data();
      });
    checker = true;
  } catch (error) {
    console.log("olmayan veri sorgusu hatasi");
  }
  console.log(checker);
  return checker;
};
