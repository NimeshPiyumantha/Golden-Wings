import express, { Router } from "express";
import UserController from "../controller/UserController";

export default class UserRoutes {
  private router: Router = express.Router();
  private routerController: UserController = new UserController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/user
    this.router.post("/", this.routerController.addNewUser);

  };

  public getRouter = (): Router => {
    return this.router;
  };
}
