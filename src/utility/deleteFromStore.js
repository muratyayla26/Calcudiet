//veriyi firestoredan silmek icin kullanilan fonksiyon
//ilk parametre yemegin id si, ikinci parametre userid si
//fonksiyon true donerse veri basari ile silindi
//fonksiyon false donerse firestore ile ilgili baglanti hatasi anlamina geliyor
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
