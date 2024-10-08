"use client";

import React, { useState } from "react";
import {
	PiArrowFatDown,
	PiArrowFatUp,
	PiBookmarkSimple,
	PiChat,
	PiShareFat,
} from "react-icons/pi";
import { Button } from "@/components/ui/button";

const CommentSection = () => {
	const [commment, setCommment] = useState<string>("");
	return (
		<div className='border-app w-full rounded-2xl border'>
			<textarea
				className='w-full bg-transparent px-3 py-2 outline-none'
				value={commment}
				onChange={(e) => setCommment(e.target.value)}
			/>
			<div className='flex w-full flex-row items-center justify-end space-x-3 p-2'>
				<Button
					variant='secondary'
					className='bg-app-foreground rounded-full'
					onClick={() => setCommment("")}>
					Cancel
				</Button>
				<Button className='rounded-full'>Commment</Button>
			</div>
		</div>
	);
};

type DiscussionProps = {
	linkPost: string;
	disableComment?: boolean;
};

const Discussion = ({ linkPost, disableComment = false }: DiscussionProps) => {
	const [openComment, setOpenComment] = useState<boolean>(false);
	const handleClicVote = (vote: "up" | "down") => {};
	const handleopenComment = () => {
		if (disableComment) {
			document.location.href = linkPost;
			return;
		}
		setOpenComment((pre) => !pre);
	};
	const handleClickSave = () => {};
	const handleClickShare = () => {};
	return (
		<div className='flex flex-col space-y-2'>
			<div className='flex w-full flex-row items-center justify-start space-x-2 text-sm'>
				<div className='border-app flex flex-row items-center rounded-full border'>
					<button
						onClick={() => handleClicVote("up")}
						className='hover:bg-app-foreground flex flex-row items-center space-x-1 rounded-full p-2'>
						<PiArrowFatUp className='h-5 w-5' />
						<span>10</span>
					</button>
					<button
						onClick={() => handleClicVote("down")}
						className='hover:bg-app-foreground flex flex-row items-center space-x-1 rounded-full p-2'>
						<PiArrowFatDown className='h-5 w-5' />
						<span>10</span>
					</button>
				</div>
				<button
					onClick={() => handleopenComment()}
					className='border-app hover:bg-app-foreground flex flex-row items-center space-x-1 rounded-full border p-2'>
					<PiChat className='h-5 w-5' />
					<span>10</span>
				</button>
				<button
					onClick={() => handleClickSave()}
					className='border-app hover:bg-app-foreground flex flex-row items-center space-x-1 rounded-full border p-2'>
					<PiBookmarkSimple className='h-5 w-5' />
					<span className='hidden sm:inline-block'>Save</span>
				</button>
				<button
					onClick={() => handleClickShare()}
					className='border-app hover:bg-app-foreground flex flex-row items-center space-x-1 rounded-full border p-2'>
					<PiShareFat className='h-5 w-5' />
					<span className='hidden sm:inline-block'>Share</span>
				</button>
			</div>
			{!disableComment && openComment && <CommentSection />}
		</div>
	);
};

export { Discussion, CommentSection };
