import { RequestHandler, Request, Response } from "express";
import { Place } from "../modules/Place";

export default class PlaceController {
  addNewPlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  updatePlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deletePlace: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
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
}
