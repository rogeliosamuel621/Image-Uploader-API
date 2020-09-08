import { Request, Response } from 'express';
import multer from 'multer';
import { v2 } from 'cloudinary';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
const upload = multer();

export function uploadImageController(req: Request, res: Response): any {
  const url = `/Users/Samuel/Documents/Develop/image-uploader-API/img/${req.file.originalname}`;

  v2.uploader.upload(url, (err, result) => {
    if (err) {
      return res.json({
        error: true,
        statusCode: INTERNAL_SERVER_ERROR,
        data: null,
        message: 'An error has occurred uploading your image, try later',
      });
    }

    return res.json({
      error: false,
      statusCode: OK,
      data: {
        url: result?.url,
        name: result?.original_filename,
        format: result?.format,
      },
    });
  });
}
