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

    // GET /api/v1/user
    this.router.get("/", this.routerController.retrieveAllUser);

    // PUT /api/v1/user/:id
    this.router.put("/:id", this.routerController.updateUser);

    // DELETE /api/v1/user/:id
    this.router.delete("/:id", this.routerController.deleteUser);

  };

  public getRouter = (): Router => {
    return this.router;
  };
}
