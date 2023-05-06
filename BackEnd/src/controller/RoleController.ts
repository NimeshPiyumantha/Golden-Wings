import { RequestHandler,Request,Response } from "express";

export default class RoleController{
    addNewRole: RequestHandler = async (
        req: Request,
        res: Response
      ): Promise<Response> => {
        return res;
      };

      
}