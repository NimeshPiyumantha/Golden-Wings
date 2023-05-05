import { RequestHandler, Request, Response } from "express";

export default class UserController {
  addNewUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };
}
