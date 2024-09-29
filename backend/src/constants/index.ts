export const PORT = 1320;
export const COOKIE_AGE = 7 * 24 * 60 * 60 * 1000;
export const REFRESH_TOKEN_AGE = 7 * 24 * 60 * 60 * 1000;
export const ACCESS_TOKEN_AGE = 30 * 60 * 1000;

export const FRONTEND_URL = 'http://localhost:3000';
export const BACKEND_URL = `http://localhost:${PORT}`;

export const JWT_SECRET = process.env.JWT_SECRET;
export const DATABASE_URL = process.env.DATABASE_URL;

export const GITHUB_GET_USER_DATA_URL = 'https://api.github.com/user';
export const GOOGLE_GET_USER_DATA_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';
