import express, { Router } from "express";
import PostController from "../controller/PostController";

export default class PostRoutes {
  private router: Router = express.Router();
  private postController: PostController = new PostController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/post
    this.router.post("/", this.postController.addNewPost);

    // GET /api/v1/post
    this.router.get("/", this.postController.retrieveAllPost);

    // PUT /api/v1/post/:id
    this.router.put("/:id", this.postController.updatePost);

    // PUT /api/v1/post/:id
    this.router.put("/image/:id", this.postController.updateImage);

    // DELETE /api/v1/post/:id
    this.router.delete("/:id", this.postController.deletePost);

    // GET /api/v1/post/category/:id
    this.router.get("/category/:id", this.postController.searchPostByCategory);

    // GET /api/v1/post/search/:id
    this.router.get("/search/:id", this.postController.searchByValue);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
