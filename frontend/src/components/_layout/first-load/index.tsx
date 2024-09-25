"use client";

import { _get } from "@/lib/fetch";
import useUserStore from "@/stores/user-store";
import { useEffect } from "react";

export const FirstLoad = () => {
	const updateUser = useUserStore.use.update();
	const resetUser = useUserStore.use.reset();
	useEffect(() => {
		const access_token = localStorage.getItem("access_token");
		_get("user/session", { authorization: access_token || "" })
			.then((session) => {
				const user = session.user;
				delete user.typ;
				updateUser(user);
			})
			.catch((err) => {
				resetUser();
				console.error(err);
			});
	}, []);

	return null;
};
