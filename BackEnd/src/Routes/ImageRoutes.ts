import express, { Router } from "express";
import ImageController from "../controller/ImageController";

export default class PlaceRoutes {
  private router: Router = express.Router();
  private imageController: ImageController = new ImageController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // GET /api/v1/image
    this.router.get("/", this.imageController.retrieveAllImages);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
