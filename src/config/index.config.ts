import { config } from 'dotenv';
config();

export const api_key = process.env.API_KEY;
export const jwt_key = process.env.JWT_SECRET;
