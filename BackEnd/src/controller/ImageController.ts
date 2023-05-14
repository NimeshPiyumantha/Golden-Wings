import { RequestHandler, Request, Response } from "express";
import { Image } from "../modules/Image";

export default class ImageController {
  retrieveAllImages: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let image = await Image.find();
      return res.status(200).json({ responseData: image });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
