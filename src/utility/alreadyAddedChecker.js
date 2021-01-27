//verinin daha önce firestora eklenip eklenmediğini kontrol edeceğimiz fonksiyon
//fonksiyon eğer true dönerse daha önce veri eklenmiş anlamina geliyor
//fonksiyon false dönerse veri store daha önce eklenmemis anlamina geliyor.
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
    console.log("olmayan veri sorgusu hatasi");
  }
  return checker;
};
