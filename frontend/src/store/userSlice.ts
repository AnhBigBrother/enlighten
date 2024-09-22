import { create } from "zustand";

type TUser = {
	email: string;
	name: string;
	image: string;
} | null;
type TUserStore = {
	user: TUser;
	updateUser: (newUser: TUser) => void;
};

const useUserStore = create<TUserStore>()((set) => ({
	user: null,
	updateUser: (newUser: TUser) => set({ user: newUser }),
}));
