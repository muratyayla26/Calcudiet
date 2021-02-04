//kullanicinin firestore authenticaion kullanarak login olup olmadigini kontrol etmemizi
//saglayan context yapisi
import React, { useState, useEffect, createContext } from "react";
import { authentication } from "./firestore";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		authentication.onAuthStateChanged((user) => {
			setCurrentUser(user);
			//getuserdata firebase
			setUserData();
		});
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, userData, setUserData }}>
			{children}
		</AuthContext.Provider>
	);
};
