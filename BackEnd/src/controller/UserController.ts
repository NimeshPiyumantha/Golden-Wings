import { RequestHandler, Request, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { Role } from "../modules/Role";
import { User } from "../modules/User";

export default class UserController {
  addNewUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let session: ClientSession | null = null;

    try {
      const { roleType } = req.body;

      // start the session and transaction
      session = await mongoose.startSession();
      session.startTransaction();

      // check whether the relevant role already exists or not
      let role = await Role.findOne({
        roleType: roleType,
      }).session(session);

      if (!role) {
        // save role only if not exists
        role = new Role({ roleType: roleType });
        role = await role.save();
      }

      const user = new User(req.body);
      // set the role id here
      user.roleId = role._id.toString();
      // save role details
      let newUser = await user.save();

      await session.commitTransaction();
      session.endSession();

      return res
        .status(200)
        .json({ message: "New User created.", responseData: newUser });
    } catch (error: unknown) {
      if (session != null) {
        try {
          await session.abortTransaction();
        } catch (abortError) {
          console.log(`Error aborting transaction: ${abortError}`);
        }
      }

      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  updateUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ message: "User updated.", responseData: updatedUser });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deleteUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        throw new Error("Failed to delete User.");
      }

      return res
        .status(200)
        .json({ message: "User deleted.", responseData: deletedUser });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  retrieveAllUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const users = await User.find();
      return res.status(200).json({ responseData: users });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  signInUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const users = await User.findOne({
        roleId: req.body.roleId,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(200).json({ responseData: users });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  searchUserFirstName: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const users = await User.find({
        $or: [{ fristName: id }, { lastName: id }, { address: id }],
      });
      return res.status(200).json({ responseData: users });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  searchById: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const users = await User.findById(id);
      return res.status(200).json({ responseData: users });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
  }