import { Document, Schema, model } from "mongoose";

export interface IImage extends Document {
  image: string;
}

// creating schema
const ImageSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Image = model<IImage>("Image", ImageSchema);