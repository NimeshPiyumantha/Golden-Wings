import { RequestHandler, Request, Response } from "express";
import { Post } from "../modules/Post";

export default class PostController {
  addNewPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  updatePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deletePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  retrieveAllPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  searchPostByCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let posts = await Post.find({ categoryId: id });
      return res.status(200).json({ responseData: posts });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
