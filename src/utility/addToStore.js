//firestore veri eklemek icin kullanacagimiz fonksiyon
//Fonksiyon eger true donduruyorsa veri basarili bir sekilde firestore eklendi.
//fonksiyon false donduruyorsa veri firestora eklenemedi. Daha once aynı veri,
//aynı kullanici icin eklenmis anlamina geliyor.
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
      ownerId: ownerId,
    });
  }
  return checker;
};
