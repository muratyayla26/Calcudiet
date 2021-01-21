import db from "./firestore";

export const addToStore = async (recipe) => {
  let checker = true;
  try {
    const id = recipe.uri.split("_")[1];
    await db
      .collection("recipe")
      .where("id", "==", `${id}`)
      .get()
      .then((response) => {
        return response.docs[0].data();
      });
    checker = false;
  } catch (error) {
    console.log("olmayan veri sorgusu hatasi");
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
    });
    console.log("veri stora eklendi");
  } else {
    console.log("veri daha once stora eklendigi icin tekrar eklenmedi");
  }
};
