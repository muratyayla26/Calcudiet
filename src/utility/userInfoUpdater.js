import { db } from "./firestore";
// parametre olarak userData getir.
export const userInfoUpdater = async (updateData, currentUser) => {
  let isExist = false;

  const { weight, height, age, gender, pal, calories } = updateData;
  console.log("dataUpdater: ", weight, height, age, gender, pal, calories);
  const ownerId = currentUser;
  try {
    await db
      .collection("user")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        console.log("RESPONSE !!!:", res.docs[0].data());
      });
    console.log("isEcist true olacak");
    isExist = true;
  } catch (error) {
    console.log(error);
    console.log("Add çalıştı");
    await db.collection("user").add({
      weight,
      height,
      age,
      gender,
      pal,
      calories,
      ownerId,
    });
  }
  if (isExist) {
    console.log("olan veriyi guncelliycek");
    await db
      .collection("user")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        console.log("where get ici");
        res.docs.forEach(async (doc) => {
          console.log(doc.id);
          await db.collection("user").doc(doc.id).set({
            weight: weight,
            height: height,
            age: age,
            gender: gender,
            pal: pal,
            calories: calories,
            ownerId: ownerId,
          });
        });
      });
  }
};
