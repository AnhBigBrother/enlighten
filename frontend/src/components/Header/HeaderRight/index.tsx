import { IconButton } from "@/components/Header/IconButton";
import { Notification } from "@/components/Header/HeaderRight/Notification";
import { UserSetting } from "@/components/Header/HeaderRight/UserSetting";
import { NotebookPen } from "lucide-react";
import React from "react";

export const HeaderRight = () => {
	return (
		<menu className='flex flex-row items-center gap-2'>
			<div className='flex flex-row items-center'>
				<IconButton>
					<NotebookPen />
					<p className='ml-2 hidden sm:inline-block'>Write</p>
				</IconButton>
				<Notification />
			</div>
			<UserSetting />
		</menu>
	);
};
