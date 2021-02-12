import { db } from "./firestore";

export const getUserInfo = async (currentUser) => {
  let isExist = false;
  const ownerId = currentUser;
  let output = {};
  try {
    await db
      .collection("user")
      .where("ownerId", "==", `${ownerId}`)
      .get()
      .then((res) => {
        output = res.docs[0].data();
      });
    // eslint-disable-next-line no-unused-vars
    isExist = true;
    return output;
  } catch (error) {
    output = null;
  }
};
