//this function is used to add data to the firestore
//if function returns true, it means that data is added successfully
//if function returns false it means that data couldn't added
//function parameters are recipe object and userId
import { db } from "./firestore";

export const addToStore = async (recipe, ownerId) => {
  let checker = true;
  try {
    const id = recipe.uri.split("_")[1];
    await db
      .collection("recipe")
      .where("id", "==", `${id}`)
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((response) => {
        console.log(response.docs[0].data());
      });
    checker = false;
  } catch (error) {
    //console.log("data couldn't found");
  }

  if (checker) {
    db.collection("recipe").add({
      name: recipe.label,
      image: recipe.image,
      url: recipe.url,
      allergic:
        recipe.cautions.length === 0 || recipe.cautions[0] === "FODMAP"
          ? ""
          : recipe.cautions[0],
      ingredients: recipe.ingredientLines,
      service: recipe.yield || 1,
      calory: recipe.calories,
      nutrition: recipe.digest,
      id: recipe.uri.split("_")[1],
      ownerId: ownerId,
    });
  }
  return checker;
};
