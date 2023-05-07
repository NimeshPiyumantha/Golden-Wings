import { Document, Schema, model } from "mongoose";

export interface IImage extends Document {
  image: string;
}



export const Image = model<IImage>("Image", ImageSchema);