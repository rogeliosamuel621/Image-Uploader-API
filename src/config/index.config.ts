import { config } from 'dotenv';
config();

export const api_key = process.env.API_KEY;
export const jwt_key = process.env.JWT_SECRET;
export const cloudinary_cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
export const cloudinary_api_key = process.env.CLOUDINARY_API_KEY;
export const cloudinary_api_secret = process.env.CLOUDINARY_API_SECRET;
export const file_size = process.env.FILE_SIZE as undefined | number;
