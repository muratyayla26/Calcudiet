//this function is used to write and update user infos about BMR
//function parameters are user datas from BMR function and userId
import { db } from "./firestore";

export const userInfoUpdater = async (updateData, ownerId) => {
  let isExist = false;
  const { weight, height, age, gender, pal, calories } = updateData;

  try {
    await db
      .collection("user")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        console.log("RESPONSE:", res.docs[0].data());
      });
    isExist = true;
  } catch (error) {
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
    await db
      .collection("user")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        res.docs.forEach(async (doc) => {
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
