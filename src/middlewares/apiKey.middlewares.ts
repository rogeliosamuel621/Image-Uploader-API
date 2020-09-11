import { Router, Request, Response, NextFunction } from "express";
import { UNAUTHORIZED } from "http-status-codes";
import { api_key } from "../config/index.config";
const APIKeyMiddleware = Router();

APIKeyMiddleware.use((req: Request, res: Response, next: NextFunction) => {
  const API_KEY = req.headers["api-key"];

  if (!API_KEY || API_KEY !== api_key) {
    return res.status(UNAUTHORIZED).json({
      error: true,
      statusCode: UNAUTHORIZED,
      data: null,
      message: "NO API KEY PROVIDED",
    });
  }

  if (API_KEY === api_key) {
    next();
  }
});

export default APIKeyMiddleware;
