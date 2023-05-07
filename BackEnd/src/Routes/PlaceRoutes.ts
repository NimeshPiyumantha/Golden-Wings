import express, { Router } from "express";
import PlaceController from "../controller/PlaceController";

export default class PlaceRoutes {
  private router: Router = express.Router();
  private placeController: PlaceController = new PlaceController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/place
    this.router.post("/", this.placeController.addNewPlace);


  };

  public getRouter = (): Router => {
    return this.router;
  };
}
