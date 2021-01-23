import db from "./firestore";
// verinin daha önce eklenip eklenmediğini kontrol edeceğimiz fonksiyon
//eğer true dönerse daha önce veri eklenmiş demek
//false dönerse veri store daha önce eklenmemiş
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
