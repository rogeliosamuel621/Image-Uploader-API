import { config } from 'dotenv';
config();

export const api_key = process.env.API_KEY;
export const jwt_key = process.env.JWT_SECRET;
export const cloud_name = process.env.CLOUD_NAME;
export const api_key_cloudinary = process.env.API_KEY_CLOUDINARY;
export const api_secret = process.env.API_SECRET;
