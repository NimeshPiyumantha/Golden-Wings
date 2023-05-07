import express, { Router } from "express";


export default class PlaceRoutes {
  private router: Router = express.Router();


  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {

  };

  public getRouter = (): Router => {
    return this.router;
  };
}
