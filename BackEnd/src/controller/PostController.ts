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
    try {
      const { id } = req.params;
      let updatedPost = await Post.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ message: "Post updated.", responseData: updatedPost });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deletePost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let deletedPost = await Post.findByIdAndDelete(id);

      return res
        .status(200)
        .json({ message: "Post deleted.", responseData: deletedPost });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  retrieveAllPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const posts = await Post.find();
      return res.status(200).json({ responseData: posts });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
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
