import { Request, Response } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { v2 } from 'cloudinary';

export async function uploadImageController(
  req: Request,
  res: Response
): Promise<Response | any> {
  res.send('Working');
}
