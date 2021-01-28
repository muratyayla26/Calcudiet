//kullanicinin firestore authenticaion kullanarak login olup olmadigini kontrol etmemizi
//saglayan context yapisi
import React, { useState, useEffect, createContext } from "react";
import { authentication } from "./firestore";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
