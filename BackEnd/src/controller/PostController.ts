import { RequestHandler, Request, Response } from "express";

export default class PostController {
  addNewPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

}
