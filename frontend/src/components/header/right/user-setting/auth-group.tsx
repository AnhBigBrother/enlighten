import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { _get } from "@/lib/fetch";
import useUserStore from "@/stores/user-store";

export const AuthGroup = () => {
	const user = useUserStore.use.user();
	const resetUser = useUserStore.use.reset();
	const { toast } = useToast();
	const handleLogout = () => {
		_get("auth/logout")
			.then((result) => {
				resetUser();
				toast({
					title: "Success",
					description: "You have been loged out",
				});
				localStorage.removeItem("access_token");
			})
			.catch((err) => {
				console.error(err);
				toast({
					title: "Failed to log out",
					description: "Something went wrong, try latter!",
					variant: "destructive",
				});
			});
	};

	return (
		<>
			{user ? (
				<DropdownMenuItem>
					<button
						className='h-full w-full text-start'
						onClick={() => handleLogout()}>
						Log out
					</button>
				</DropdownMenuItem>
			) : (
				<>
					<DropdownMenuItem>
						<Link
							className='h-full w-full'
							href='/login'>
							Login
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							className='h-full w-full'
							href='/signup'>
							Sign up
						</Link>
					</DropdownMenuItem>
				</>
			)}
		</>
	);
};
