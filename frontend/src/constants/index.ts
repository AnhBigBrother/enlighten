export const BACKEND_URL = "http://localhost:1320";
export const FRONTEND_URL = "http://localhost:3000";

export const COOKIE_AGE = 7 * 24 * 60 * 60;
export const TOAST_REMOVE_DELAY = 3000;
export const TOAST_LIMIT = 3;

export const GITHUB_GET_TOKEN_URL = "https://github.com/login/oauth/access_token";
export const GITHUB_GET_CONSENT_URL = "https://github.com/login/oauth/authorize";
export const GITHUB_GET_USER_DATA_URL = "https://api.github.com/user";
export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!;
export const GITHUB_CLIENT_SECRET = process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!;
export const GITHUB_CALLBACK_URL = process.env.NEXT_PUBLIC_GITHUB_CALLBACK_URL!;

export const GOOGLE_GET_CONSENT_URL = "https://accounts.google.com/o/oauth2/v2/auth";
export const GOOGLE_GET_TOKEN_URL = "https://oauth2.googleapis.com/token";
export const GOOGLE_GET_USER_DATA_URL = "https://www.googleapis.com/oauth2/v3/userinfo";
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
export const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!;
export const GOOGLE_CALLBACK_URL = process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL!;
