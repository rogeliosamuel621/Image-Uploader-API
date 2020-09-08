import { DiskStorageOptions } from 'multer';
import path from 'path';

export const diskStorageObjest: DiskStorageOptions = {
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../img'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
};
