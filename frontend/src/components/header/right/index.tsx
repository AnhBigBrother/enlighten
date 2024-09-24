import { IconButton } from "@/components/header/icon-button";
import { Notification } from "@/components/header/right/notification";
import { UserSetting } from "@/components/header/right/user-setting";
import { NotebookPen } from "lucide-react";
import React from "react";

export const Right = () => {
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
