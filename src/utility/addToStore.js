import db from "./firestore";

export const addToStore = async (recipe) => {
  let checker = true;
  try {
    const holder = await db
      .collection("recipe")
      .where("id", "==", `${recipe.id}`)
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
      name: recipe.name,
      image: recipe.image,
      url: recipe.url,
      allergic: recipe.allergic,
      ingredients: recipe.ingredients,
      service: recipe.service,
      calory: recipe.calory,
      nutrition: recipe.nutrition,
      id: recipe.id,
    });
    console.log("veri stora eklendi");
  } else {
    console.log("veri daha once stora eklendigi icin tekrar eklenmedi");
  }
};
