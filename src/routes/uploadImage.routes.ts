import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { uploadImageController } from '../controllers/uploadImage.Controllers';
import { file_size } from '../config/index.config';
const router = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../img'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage, limits: { fieldSize: file_size } });

router.post('/upload', upload.single('image'), uploadImageController);

export default router;
