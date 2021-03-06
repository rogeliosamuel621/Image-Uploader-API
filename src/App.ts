import Express, { Application } from "express";
import { v2 } from "cloudinary";
import {
  cloudinary_cloud_name,
  cloudinary_api_key,
  cloudinary_api_secret,
} from "./config/index.config";
import cors from "cors";
import morgan from "morgan";

import uploadImage from "./routes/uploadImage.routes";
import APIKeyMiddleware from "./middlewares/apiKey.middlewares";
import NotFound from "./middlewares/notFound.middleware";

class Server {
  private App: Application;

  constructor(private port: string) {
    this.App = Express();
    this.Settings();
    this.MiddlewaresInput();
    this.Routes();
    this.MiddlewareOutput();
  }

  private Settings(): void {
    this.App.set("port", this.port);
    v2.config({
      cloud_name: cloudinary_cloud_name,
      api_key: cloudinary_api_key,
      api_secret: cloudinary_api_secret,
    });
  }

  private MiddlewaresInput(): void {
    this.App.use(cors());
    this.App.use(APIKeyMiddleware);
  }

  private Routes(): void {
    this.App.use("/api", uploadImage);
  }

  private MiddlewareOutput(): void {
    this.App.use(NotFound);
  }

  public StartServer(): void {
    this.App.listen(this.App.get("port"));
    console.log("Wroking");
  }
}

export default Server;
