import React, { useState, useEffect, createContext } from "react";
import { authentication } from "./firestore";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	return (
		<UserContext.Provider value={{ currentUser }}>
			{children}
		</UserContext.Provider>
	);
};
