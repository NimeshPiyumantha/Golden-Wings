import express, { Router } from "express";
import RoleController from "../controller/RoleController";

export default class RoleRoutes {
  private router: Router = express.Router();
  private routerController: RoleController = new RoleController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {};

  public getRouter = (): Router => {
    return this.router;
  };
}
