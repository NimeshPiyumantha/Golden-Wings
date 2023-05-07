import { Document, Schema, model } from "mongoose";

export interface IImage extends Document {
  imageUrl: string;
}

// creating schema
const ImageSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Image = model<IImage>("Image", ImageSchema);
