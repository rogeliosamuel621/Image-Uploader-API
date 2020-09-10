import { DiskStorageOptions } from "multer";

export const diskStorageObjest: DiskStorageOptions = {
  destination: (req, file, cb) => {
    cb(null, "../img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
};
