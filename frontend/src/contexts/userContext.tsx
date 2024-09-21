import { createContext, useContext, useState } from "react";

type TUser = {
	email: string;
	id?: string;
	name?: string;
	image?: string;
};

type TUserContext = {
	userData: TUser | null;
	setUserData: React.Dispatch<React.SetStateAction<TUser | null>>;
};

const UserContext = createContext<TUserContext | null>(null);

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (context === null) throw new Error("useContext must be used within a context provider");
	return context;
};

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<TUser | null>(null);
	return (
		<UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>
	);
};
