import { RequestHandler, Request, Response } from "express";
import { Place } from "../modules/Place";
import mongoose, { ClientSession } from "mongoose";
import { Category } from "../modules/Category ";
import { Image } from "../modules/Image";
import { Time } from "../modules/Time";
import { Tag } from "../modules/Tag";

export default class PlaceController {
  addNewPlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let session: ClientSession | null = null;

    try {
      const { categoryName } = req.body;
      const { imageUrl } = req.body;
      const { timeRange } = req.body;

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

      // check whether the relevant time Range already exists or not
      let time = await Time.findOne({
        timeRange: timeRange,
      }).session(session);

      if (!time) {
        // save time Range only if not exists
        time = new Time({ timeRange: timeRange });
        time = await time.save();
      }

      const place = new Place(req.body);

      // set the category id here
      place.categoryId = category._id.toString();
      // set the image id here
      place.imageId = images._id.toString();
      // set the time id here
      place.timeId = time._id.toString();

      // save Post details
      let newPost = await place.save();

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

  updatePlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let updatedPlace = await Place.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ message: "Place updated.", responseData: updatedPlace });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deletePlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      let deletedPlace = await Place.findByIdAndDelete(id);

      return res
        .status(200)
        .json({ message: "Place deleted.", responseData: deletedPlace });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  retrieveAllPlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const place = await Place.find();
      return res.status(200).json({ responseData: place });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  searchPlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const place = await Place.find({
        $or: [
          { _id: id },
          { location: id },
          { categoryId: id },
          { categoryName: id },
        ],
      });
      return res.status(200).json({ responseData: place });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
