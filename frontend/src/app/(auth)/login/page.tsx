import LoginForm from "@/components/AuthForm/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Enlighten | Login",
};

const LoginPage = () => {
	return <LoginForm />;
};

export default LoginPage;
