//login olan kullanicinin ID'si ne kayıtlı tum verileri firestoredan
//cagirdigimiz fonksiyon. Verileri bir arrayin icine atıp, o arrayi return ediyor.
import { db } from "./firestore";

export const getDataFromStore = async (ownerId) => {
  try {
    const holder = [];
    await db
      .collection("recipe")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          holder.push(doc.data());
        });
      });
    return holder;
  } catch (e) {
    console.log(e.message);
  }
};
