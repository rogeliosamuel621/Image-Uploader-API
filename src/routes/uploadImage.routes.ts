import { Router } from "express";
import multer from "multer";
import path from "path";
import { uploadImageController } from "../controllers/uploadImage.Controllers";
import { file_size } from "../config/index.config";
import { diskStorageObjest } from "../utils/multerConfig";
const router = Router();
const storage = multer.diskStorage(diskStorageObjest);

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    var ext = path.extname(file.originalname);
    if (
      ext !== ".png" &&
      ext !== ".jpg" &&
      ext !== ".svg" &&
      ext !== ".jpeg" &&
      ext !== ".ico"
    ) {
      return callback(null, false);
    }
    return callback(null, true);
  },
  limits: { fileSize: file_size },
});

router.post("/upload", upload.single("image"), uploadImageController);

export default router;
