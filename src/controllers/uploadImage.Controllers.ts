import { Request, Response } from "express";
import { v2 } from "cloudinary";
import { INTERNAL_SERVER_ERROR, OK, BAD_REQUEST } from "http-status-codes";
import path from "path";

export function uploadImageController(req: Request, res: Response): any {
  if (!req.file) {
    return res.json({
      error: true,
      statusCode: BAD_REQUEST,
      data: null,
      message: "Only images are allowed",
    });
  }

  const url = path.join(__dirname, `../../img/${req.file.originalname}`);

  v2.uploader.upload(url, (err, result) => {
    if (err) {
      return res.json({
        error: err,
        statusCode: INTERNAL_SERVER_ERROR,
        data: null,
        message: "An error has occurred uploading your image, try later",
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
