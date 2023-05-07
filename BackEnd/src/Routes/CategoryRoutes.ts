import express, { Router } from "express";
import CategoryController from "../controller/CategoryController";


export default class CategoryRoutes {
  private router: Router = express.Router();
  private categoryController: CategoryController = new CategoryController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {

  };

  public getRouter = (): Router => {
    return this.router;
  };
}