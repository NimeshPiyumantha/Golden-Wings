import express, { Router } from "express";
import RoleController from "../controller/RoleController";

export default class RoleRoutes {
  private router: Router = express.Router();
  private routerController: RoleController = new RoleController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/role
    this.router.post("/", this.routerController.addNewRole);

     // GET /api/v1/role
     this.router.get("/", this.routerController.retrieveAllRole);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
