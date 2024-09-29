import { GITHUB_CALLBACK_URL, GITHUB_CLIENT_ID, GITHUB_GET_CONSENT_URL } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const url = new URL(GITHUB_GET_CONSENT_URL);
	url.searchParams.set("client_id", GITHUB_CLIENT_ID);
	url.searchParams.set("scope", "read:user user:email");
	url.searchParams.set("redirect_uri", GITHUB_CALLBACK_URL);
	return NextResponse.json({ url: url.toString() });
}
