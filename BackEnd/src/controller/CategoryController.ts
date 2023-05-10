import { RequestHandler, Request, Response } from "express";
import { Category } from "../modules/Category ";
import { Post } from "../modules/Post";

export default class CategoryController {
  addNewCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      // destructuring assignment
      const { categoryName } = req.body;

      // check whether the relevant category already exists or not
      let category = await Category.findOne({ categoryName: categoryName });
      if (!category) {
        // save category only the category  name is not existing
        category = new Category({ categoryName: categoryName });
        category = await category.save();

        return res
          .status(200)
          .json({ message: "New category added.!", responseData: category });
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

  updateCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      // destructuring assignment
      const { id } = req.params;

      let updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ message: "Category updated.", responseData: updatedCategory });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deleteCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      // destructuring assignment
      const { id } = req.params;

      let deletedCategory = await Category.findByIdAndDelete(id);

      if (!deletedCategory) {
        throw new Error("Failed to delete post.");
      }

      return res
        .status(200)
        .json({ message: "Category deleted.", responseData: deletedCategory });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  retrieveAllCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let categories = await Category.find();
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
