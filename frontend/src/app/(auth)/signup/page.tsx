import SignupForm from "@/components/auth-form/signup-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Enlighten | Sign up",
};

const SignupPage = () => {
	return <SignupForm />;
};

export default SignupPage;
