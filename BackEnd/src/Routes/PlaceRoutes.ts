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

    // GET /api/v1/place
    this.router.get("/", this.placeController.retrieveAllPlace);

    // GET /api/v1/place/:id
    this.router.get("/search/:id", this.placeController.searchPlace);

    // PUT /api/v1/place/:id
    this.router.put("/:id", this.placeController.updatePlace);

    // DELETE /api/v1/place/:id
    this.router.delete("/:id", this.placeController.deletePlace);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
