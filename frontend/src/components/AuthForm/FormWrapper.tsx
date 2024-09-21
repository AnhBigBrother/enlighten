import { FormFooter } from "@/components/AuthForm/FormFooter";
import { FormHeader } from "@/components/AuthForm/FormHeader";
import { FormOAuth } from "@/components/AuthForm/FormOAuth";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

type FormWrapperProps = {
	children: React.ReactNode;
	headerLabel: string;
	footerLinkLabel: string;
	footerLinkHref: string;
	showOAuth?: boolean;
};

function FormWrapper({
	children,
	headerLabel,
	footerLinkLabel,
	footerLinkHref,
	showOAuth,
}: FormWrapperProps) {
	return (
		<Card className='w-fit shadow-lg sm:w-[24rem]'>
			<CardHeader>
				<FormHeader label={headerLabel}></FormHeader>
			</CardHeader>
			<CardContent> {children}</CardContent>
			{showOAuth && (
				<CardFooter>
					<FormOAuth />
				</CardFooter>
			)}
			<CardFooter>
				<FormFooter
					href={footerLinkHref}
					label={footerLinkLabel}></FormFooter>
			</CardFooter>
		</Card>
	);
}

export { FormWrapper };
