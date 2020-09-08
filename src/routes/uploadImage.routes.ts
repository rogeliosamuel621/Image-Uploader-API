import { Router } from 'express';
import { uploadImageController } from '../controllers/uploadImage.Controllers';
const router = Router();

router.post('/upload', uploadImageController);

export default router;
