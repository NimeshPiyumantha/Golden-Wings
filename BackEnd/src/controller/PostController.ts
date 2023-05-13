import { RequestHandler, Request, Response } from "express";
import { Post } from "../modules/Post";
import mongoose, { ClientSession } from "mongoose";
import { Category } from "../modules/Category ";
import { Tag } from "../modules/Tag";
import { Image } from "../modules/Image";

export default class PostController {
  addNewPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let session: ClientSession | null = null;

    try {
      const { categoryName } = req.body;
      const { imageUrl } = req.body;

      // start the session and transaction
      session = await mongoose.startSession();
      session.startTransaction();

      // check whether the relevant category already exists or not
      let category = await Category.findOne({
        categoryName: categoryName,
      }).session(session);

      if (!category) {
        // save category only if not exists
        category = new Category({ categoryName: categoryName });
        category = await category.save();
      }

      // check whether the relevant images already exists or not
      let images = await Image.findOne({
        imageUrl: imageUrl,
      }).session(session);

      if (!images) {
        // save image only if not exists
        images = new Image({ imageUrl: imageUrl });
        images = await images.save();
      }

      const post = new Post(req.body);

      // set the category id here
      post.categoryId = category._id.toString();
      // set the image id here
      post.imageId = images._id.toString();

      // save Post details
      let newPost = await post.save();

      // getting the tags array from request body
      const tags = req.body.tags;

      // save tags
      if (tags.length > 0) {
        for (let i = 0; i < tags.length; i++) {
          // check whether the relevant tag already exists or not
          let tag = await Tag.findOne({ text: tags[i] }).session(session);
          if (!tag) {
            tag = new Tag({ text: tags[i] });
            await tag.save();
          }
        }
      }

      await session.commitTransaction();
      session.endSession();

      return res
        .status(200)
        .json({ message: "New Post created.", responseData: newPost });
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

  updateImage: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let post = new Post(await Post.findById(id));
      let updatedImage = await Image.findByIdAndUpdate(post.imageId, req.body, {
        new: true,
      });
      return res.status(200).json({
        message: "Image updated.",
        responseData: updatedImage,
      });
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

  searchByValue: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const posts = await Post.find({
        $or: [{ _id: id }, { userId: id }, { categoryId: id }],
      });
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
