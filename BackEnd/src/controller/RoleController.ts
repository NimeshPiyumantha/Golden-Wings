import { RequestHandler, Request, Response } from "express";
import { Role } from "../modules/Role";

export default class RoleController {
  addNewRole: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      // destructuring assignment
      const { roleType } = req.body;

      // check whether the relevant role already exists or not
      let role = await Role.findOne({ roleType: roleType });
      if (!role) {
        // save role only the role  type is not existing
        role = new Role({ roleType: roleType });
        role = await role.save();

        return res
          .status(200)
          .json({ message: "New Role added.!", responseData: role });
      } else {
        return res.status(200).json({ message: "Already exists." });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  updateRole: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deleteRole: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  retrieveAllRole: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let categories = await Role.find();
      return res.status(200).json({ responseData: categories });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
