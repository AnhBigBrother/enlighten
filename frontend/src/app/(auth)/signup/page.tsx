import SignupForm from "@/components/AuthForm/SignupForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Enlighten | Sign up",
};

const SignupPage = () => {
	return <SignupForm />;
};

export default SignupPage;
