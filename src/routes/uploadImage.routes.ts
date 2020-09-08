import { Router } from 'express';
import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './img'); // Agregamos el directorio donde se guardarán los archivos.
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Le pasamos el nombre original del archvio, también podriamos cambiar el nombre concatenando la fecha actual.
  },
});
const upload = multer({ storage });
import { uploadImageController } from '../controllers/uploadImage.Controllers';
const router = Router();

router.post('/upload', upload.single('image'), uploadImageController);

export default router;
